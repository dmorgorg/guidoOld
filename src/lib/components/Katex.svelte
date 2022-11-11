<!-- imported from elsewhere not used in this workspace -->
<script>
	import katex from 'katex';
	export let math;
	export let displayMode = false;

	const options = {
		displayMode: displayMode,
		throwOnError: false
	};

	// math = math.replace(/\{/g, '&lcub;');

	$: katexString = katex.renderToString(math, options);
</script>

{@html katexString}
