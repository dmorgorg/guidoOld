<script>
    import Error from "./Error.svelte";
    export let problem;
</script>

{#if problem[1]}
    {#each problem[1] as part}
        {@html part[0]}
    {/each}
{:else}
    <Error message="No solution provided for this problem!" />
{/if}


