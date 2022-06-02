<script>
	import { convertDate } from '$lib/utils.js';

	export let title;
	export let author;
	export let date;
</script>

<div class="relative mx-auto max-w-prose overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8">
	<span
		class="block cursor-pointer"
		on:click={() => {
			history.back();
		}}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="inline h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
		</svg>
		Back
	</span>
	<h2 class="my-4 text-4xl font-semibold">{title}</h2>
	<p class="my-4 text-gray-500">by {author}, {convertDate(date)}</p>
	<div class="prose prose-lg first-letter:text-3xl first-letter:text-blue-600">
		<slot />
	</div>
</div>
