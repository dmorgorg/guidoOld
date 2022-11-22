<script>
    import Header from "$lib/components/Header.svelte";
    import Problem from "$lib/components/Problem.svelte";
    import SubsectionHeader from "$lib/components/SubsectionHeader.svelte";

    import problems, { topMatter } from "./problems";

    let course = topMatter.course;
</script>

<!-- change class/theme for 'statics', 'strength', etc -->
<div class="page {course}">
    <Header {topMatter} />

    <main>
        {#each problems as problem}
            {#if typeof problem === "string"}
                <!-- e.g. Rectangular Channel, Triangular Channel, ... -->
                <SubsectionHeader subsectionHeader={problem} />
            {:else}
                <Problem {problem} />
            {/if}
        {/each}
    </main>
</div>

<style>
    .page {
        background-color: var(--bg);
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: space-between;
        overflow: hidden;
        padding-bottom: 1em;
    }

    main {
        counter-reset: section-counter;
        overflow-y: auto;
        padding: 0 15vw;
    }
</style>
