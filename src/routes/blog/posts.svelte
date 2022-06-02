<script>
	export let posts;
</script>

<div class="grid grid-gap-3 grid-cols-1 md:grid-cols-3 w-full mx-auto">
	{#each posts as post}
		<div class="shadow-md rounded-md bg-white">
			<h2 class="text-3xl">
				<a href="/blog/{post.path}" sveltekit:prefetch>{post.title}</a>
			</h2>
		</div>
	{/each}
</div>
