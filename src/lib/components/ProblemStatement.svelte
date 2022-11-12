<script>
    export let problem;
</script>

<article class="statement">
    <p>
        {problem[0]}
    </p>
</article>

<style lang="scss">
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
</style>
