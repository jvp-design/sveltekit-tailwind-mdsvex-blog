<script>
	import BlogDate from '$lib/blog-components/BlogDate.svelte';

	export let title;
	export let date;
</script>

<div class="max-w-prose prose prose-lg first-letter:text-3xl first-letter:text-blue-500">
	<h2>{title}</h2>
	<BlogDate {date} />
	<slot />
</div>
