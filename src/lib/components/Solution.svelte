<script>
    import SolutionPartStatement from "./SolutionPartStatement.svelte";
    export let problem;
</script>

<!-- problem[0] is the main problem statement,
    problem[1] is the array of solution and answer parts
    and problem[2] is the main problem answer  -->
<section>
    {#each problem[1] as part}
        <!-- problem part statement -->
        <div class="solution">
            <SolutionPartStatement>
                {@html part[0]}
            </SolutionPartStatement>
        </div>
    
        <!-- problem part solutions -->
        <!-- {@html part[1]} -->
        <!-- problem part answer -->
        <!-- {@html part[2]} -->
    {/each}
</section>

<style>
    section {
        counter-reset: part-counter;
        /* border: 1px solid green; */
        margin: 0.5em;
    }
</style>
