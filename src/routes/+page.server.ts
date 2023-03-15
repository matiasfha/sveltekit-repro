import type { Actions, PageServerLoad } from './$types';
import { addTodoItem, getTodoItems } from '../lib/server/db';

export const load = () => { 
	// read the items from db	
	const todos = getTodoItems()
	return {
		todos
	}
};

export const actions = {
	default: async ({ request }) => {
		const formdata = await request.formData();
		const todo = formdata.get('todo')?.toString() ?? '';
		const description = formdata.get('description')?.toString() ?? '';
		const priority = parseInt(formdata.get('priority')?.toString() ?? '1');
		// Let's store this
		// since this is running in the server you can access a DB
		// Let's use sqlite
		const item = addTodoItem({ todo, description, priority });
		return item;
	}
} satisfies Actions;

export const config = {
	runtime: 'edge',
	isr: {
		expiration: 60,

	}
}

