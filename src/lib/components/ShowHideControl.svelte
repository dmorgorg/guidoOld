<script>
    export let showHide;

    $: displaySolution = showHide.displaySolution;
    $: displayAnswer = showHide.displayAnswer;

    function toggleAnswer(event) {
        showHide.displayAnswer = !displayAnswer;
    }
    function toggleSolution(event) {
        showHide.displaySolution = !displaySolution;
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
        margin-top: 0.5em;
        text-align: right;

        button {
            font-size: 85%;
            vertical-align: middle;
            padding: 0.75%;
            margin: 0.5em;
            margin-bottom: 0;
            min-width: 8em;
            border: 1px solid black;

            &:hover {
                color: white;
            }
        }
    }
</style>
