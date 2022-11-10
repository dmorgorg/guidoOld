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
	<div class="show-hide-control">
		<button on:click={toggleSolution}>
			{#if displaySolution}
				Hide Solution
			{:else}
				Show Solution
			{/if}
		</button>
		<button on:click={toggleAnswer}>
			{#if displayAnswer}
				Hide Answer
			{:else}
				Check Answer
			{/if}
		</button>
		<div
			transition:fade={{ duration: 2000 }}
			class:show={displayAnswer}
			class:hide={!displayAnswer}
		>
			display answer
		</div>
		<div
			transition:fade={{ duration: 2000 }}
			class:show={displaySolution}
			class:hide={!displaySolution}
		>
			display solution
		</div>
	</div>
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
			// display: inline-block;
			// 	// background-color: white;
			// margin-right: 2.5%;
			margin-top: 0.5em;
			// padding: 0;
			text-align: right;
			// float: right;

			button {
				font-size: 85%;
				vertical-align: middle;
				padding: 0.75%;
				margin: 0.5em;
				margin-bottom: 0;
				min-width: 8em;
				// box-shadow: none;
				border: 1px solid black;

				&:hover {
					color: white;
				}
			}
		}
		.hide {
			transition: all 3.5s ease-out;
			display: none;
			visibility: hidden;
		}
		.show {
			transition: all 3.5s ease-out;
			display: block;
			visibility: visible;
		}
	}
</style>
