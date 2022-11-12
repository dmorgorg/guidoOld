

<article class="statement">
	<h4>&nbsp;</h4>
	<slot />
</article>

<style lang="scss">
	article.statement {
		position: relative;
		background-color: white;
		margin-top: 1em;
		padding: 0;
		

		h4 {
			// border: 1px solid black;
			display: inline;
			// font-size: 90%;

			&::before {	
				counter-increment: part-counter;							
				content: "Part " counter(part-counter) ": ";
			}
		}
	}
</style>
