<script>
	import { fade } from "svelte/transition";

	import ProblemStatement from "./ProblemStatement.svelte";
	import ShowHideControl from "./ShowHideControl.svelte";

	export let problem;

	// let displayAnswer = false;
	// let displaySolution = false;
	let showHide = {
		displayAnswer: false,
		displaySolution: false
	}

	// function toggleAnswer(event) {
	// 	showHide.displayAnswer = !showHide.displayAnswer;
	// }
	// function toggleSolution(event) {
	// 	showHide.displaySolution = !showHide.displaySolution;
	// }
</script>

<section class="problem" transition:fade>
	<ProblemStatement {problem} />
	<ShowHideControl bind:showHide />
	

	<div class:show={showHide.displaySolution} class:hide={!showHide.displaySolution}>
		<slot name="solution" />
	</div>
	<div class:show={showHide.displayAnswer} class:hide={!showHide.displayAnswer}>
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
