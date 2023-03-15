import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async () => {
	const modules = import.meta.glob(`./**/+page.svx`);
	const promises = [];
	for (const [path, resolver] of Object.entries(modules)) {
		const slug = path
			.slice(2, -10)
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/\?|\¿/g, '');

		const promise = resolver().then((post) => {
			return {
				slug: `/posts/${slug}`,
				...post.metadata
			};
		});
		promises.push(promise);
	}
	const posts = await Promise.all(promises);
	return {
		posts
	};
};

export const config = {
	runtime: 'edge'
}
export const prerender = true;
