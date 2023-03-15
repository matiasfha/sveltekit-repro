<script lang="ts">
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';

	const priorities = [1, 2, 3, 4, 5];

	export let data: PageData;
</script>

<main class="w-3/5 mx-auto p-10 ">

	<h1 class="text-3xl">Simple Todo App</h1>

	<a href="/posts">Posts</a>
	<form class="w-full flex flex-col gap-8" method="POST" use:enhance>
		<input type="text" name="todo" class="rounded-md" placeholder="TODO" />
		<textarea name="description" placeholder="description" class="rounded-md" />
		<div class="flex flex-row justify-between">
			<label
				>Priority

				<select name="priority" class="rounded-md">
					{#each priorities as priority}
						<option value={priority}>{priority}</option>
					{/each}
				</select>
			</label>
			<button
				class="w-24 border border-indigo-500 bg-indigo-500 text-white rounded-md
px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600
focus:outline-none focus:shadow-outline self-end">Add +</button
			>
		</div>
	</form>

	<table>
		<thead><tr><th>Id</th><th>Title</th><th>Description</th><th>Priority</th></tr></thead>
        <tbody> 
            {#each data.todos as item}
                <tr> 
                    <td>{item.id}</td> 
                    <td>{item.todo}</td>
                    <td>{item.description}</td>
                    <td>{item.priority}</td>
                </tr>
            {/each}
        </tbody>

	</table>
</main>
