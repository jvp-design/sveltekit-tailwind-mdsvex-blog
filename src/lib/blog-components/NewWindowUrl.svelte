<script>
	export let url;
	export let description;

    if (!description) {
        description = url
    }
</script>

<a href={url} target="_blank">{description}</a>
