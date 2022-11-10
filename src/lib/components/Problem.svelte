<script>
	import { fade } from "svelte/transition";

	let displayAnswer = false;
	let displaySolution = false;

	function toggleAnswer(event) {
		displayAnswer = !displayAnswer;
	}
	function toggleSolution(event) {
		displaySolution = !displaySolution;
	}
</script>

<section class="problem" transition:fade>
	<div class="statement"><p><slot name="problemStatement" /></p></div>
	<div class="show-hide-control">test</div>
</section>

<style lang="scss">
	section {
		&.problem {
			box-shadow: 0.125rem 0.125rem 0.5rem 0.125rem rgba(0, 0, 0, 0.25);
			margin: 1.25em 1.75em;
			padding: 1.5%;
		}
		.statement {
			line-height: 1;

			p {
				margin-top: 0.5em;
				margin-bottom: 0;
			}

			&::before {
				position: relative;
				font-weight: bold;
				counter-increment: problem-counter;
				content: "Problem " counter(problem-counter) ". ";
			}
		}
		.show-hide-control {
			// background-color: white;
			margin-right: 2.5%;
			margin-top: 1em;
			padding: 0;
			text-align: right;
			// float: right;
			border: 1px solid black;
		}
	}
</style>
