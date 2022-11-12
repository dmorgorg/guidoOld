<script>
	import { fade } from "svelte/transition";

	import ProblemStatement from "./ProblemStatement.svelte";
	import ShowHideControl from "./ShowHideControl.svelte";
    import Solution from "./Solution.svelte";
	export let problem;

	let showHide = {
		displayAnswer: false,
		displaySolution: false,
	};

	$: displaySolution = showHide.displaySolution;
	$: displayAnswer = showHide.displayAnswer;
</script>

<section class="problem" transition:fade>
	<ProblemStatement {problem} />

	<!-- check whether there are solutions provided -->
	{#if problem[1]}
		<!-- show or hide solution parts or answer  -->
		<ShowHideControl bind:showHide />
		<!-- 	creating solution in {#if ...} doesn't render the latex so use
				css to hide/show the solution 		-->
		<div class:show={displaySolution} class:hide={!displaySolution}>
			<Solution {problem} />
			<!-- <div slot="answer">answer is here</div> -->
		</div>
	{/if}

	<div class:show={displayAnswer} class:hide={!displayAnswer}>
		<slot name="answer" />
	</div>
</section>

<style lang="scss">
	section {
		&.problem {
			box-shadow: 0.125rem 0.125rem 0.5rem 0.125rem rgba(0, 0, 0, 0.25);
			margin: 1.25em 1.75em;
			padding: 1.5%;
		}

		.hide {
			// transition: all 3.5s ease-out;
			display: none;
		}
		.show {
			// transition: all 3.5s ease-out;
			display: block;
		}
	}
</style>
