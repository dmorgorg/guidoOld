<script>
    import ProblemPartAnswer from "./ProblemPartAnswer.svelte";
    import ProblemPartSolution from "./ProblemPartSolution.svelte";
    import ProblemPartStatement from "./ProblemPartStatement.svelte";
    // import ProblemPartAnswer from "./ProblemPartAnswer.svelte";
    import ShowHideControl from "./ShowHideControl.svelte";
    export let part;

    let showHide = {
        displayAnswer: false,
        displaySolution: false,
    };

    $: displaySolution = showHide.displaySolution;
    $: displayAnswer = showHide.displayAnswer;
    $: either = displaySolution || displayAnswer;

    let statement = part[0];
    let solution = part[1];
    let answer = part[2];
</script>

<div class="statement-line">
    <div class="statement"><ProblemPartStatement {statement} /></div>
    <div class="show-hide">
        <ShowHideControl bind:showHide />
    </div>
</div>

<div class:box={either}>
    <div class:show={displaySolution} class:hide={!displaySolution}>
        <ProblemPartSolution {solution} />
    </div>
    <div class:show={displayAnswer} class:hide={!displayAnswer}>
        <ProblemPartAnswer {answer} />
    </div>
</div>

<style lang="scss">
    div.box {
        border: 1px solid black;
        width: 80%;
        margin: -1em auto 2em auto;
        padding: 0 1em;
        padding-bottom: 0;
    }
    div.show-hide {
        font-size: 0.75em;
        padding-right: 0;
        flex-grow: 1;
        align-self: flex-end;
    }
    .show ~ .show {
        padding-top: 0;
    }
    div.statement-line {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;
        /* margin-top: 1em; */
        margin-bottom: 2em;
        padding: 0;

        .statement {
            flex-grow: 1;
        }
    }
</style>
