<script>
	import Header from '$lib/components/Header.svelte';
	import Problem from '$lib/components/Problem.svelte';

	import problems from './problems';

	let course = 'fluids';
	let courseModule = 'open channel flow';
</script>

<!-- change class for 'statics', 'strength', etc -->
<div class="page fluids">
	<Header {course} {courseModule} />

	<main>
		{#each problems as problem}
			{#if typeof problem === 'string'}
				<h3 class="subsectionHeader">{problem}</h3>
			{:else}
				<Problem>
					<div slot="problemStatement">{problem[0]}</div>
				</Problem>
			{/if}
		{/each}
	</main>
</div>

<style>
	.page {
		background-color: var(--bg);
		display: flex;
		flex-direction: column;
		height: 100vh;
		justify-content: space-between;
		overflow: hidden;
		padding-bottom: 1em;
	}

	main {
		counter-reset: section-counter;
        overflow-y: auto;
		padding: 0 15vw;
	}

	/* e.g. Rectangular Channel, subsection of Open Channel Flow */
	h3.subsectionHeader {
		counter-reset: problem-counter;
		font-size: 150%;
		margin: 3em auto 0 auto;
		text-shadow: 0 0 1px rgba(0, 0, 0, 0.75);
		text-transform: capitalize;
	}

	h3:first-of-type {
		margin-top: 1em;
	}

	h3::before {
		counter-increment: section-counter;
		content: counter(section-counter) '. ';
	}
</style>
