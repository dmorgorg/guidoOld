<script>
	export let topMatter;
</script>

<header>
	<div class='left'>
		<h3><a href='/'>{topMatter.description}</a> ::</h3> 
		<h3><a href='/{topMatter.course}'>{topMatter.course}</a></h3>
	</div>
	<h3 class='courseModule'>{topMatter.courseModule}</h3>
</header>

<style>
	header {
		background: var(--main-grey);
		box-shadow: -0.25px 5px 15px 0px rgba(0, 0, 0, 0.5);
		display: flex;
		font-size: 150%;
		justify-content: space-between;
		margin-bottom: 1em;
		padding: 1rem 2rem;
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.75);
	}

	h3 {
		display: inline-block;
		text-transform: capitalize;
		letter-spacing: 0.05rem;
		margin: 0;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	/* .courseModule {
		text-align: left;
		border: 1px solid green;
	} */

	.left {
		margin-right: 2em;
	}
</style>
