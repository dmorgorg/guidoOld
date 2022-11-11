<script>
    export let showHide;

    function toggleAnswer(event) {
        showHide.displayAnswer = !showHide.displayAnswer;
    }
    function toggleSolution(event) {
        showHide.displaySolution = !showHide.displaySolution;
    }
</script>

<div class="show-hide-control">
    <button on:click={toggleSolution}>
        {#if showHide.displaySolution}
            Hide Solution
        {:else}
            Show Solution
        {/if}
    </button>
    <button on:click={toggleAnswer}>
        {#if showHide.displayAnswer}
            Hide Answer
        {:else}
            Check Answer
        {/if}
    </button>
</div>

<style lang="scss">
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
</style>
