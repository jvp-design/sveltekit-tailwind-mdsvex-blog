import { convertDate } from '$lib/utils.js';

export async function get({ url }) {
	const allPostFiles = import.meta.globEager('./*.{svx,md}');
	const allPosts = Object.entries(allPostFiles).map(([path, post]) => {
		const postPath = path.slice(2, -3);
		return { ...post.metadata, path: postPath, published: convertDate(post.metadata.date) };
	});
	const authorPosts = allPosts.filter((post) => {
		const author = url.searchParams.get('author');
		if (!author) return true;
		return post.author === author;
	});
	const posts = authorPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
	if (!posts.length) {
		return { status: 404 };
	}
	return { body: { posts } };
}
