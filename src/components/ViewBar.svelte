<script>  
import ContentTable from "./ContentTable.svelte"
import ContentChart from "./ContentChart.svelte"
import Button from './Button.svelte';

let view = 'table'

function toggleView(newView) {
    view = newView;
}
</script>

<div class="button-container">
    <div>
        <Button text="Table" handleClick={() => toggleView('table')} />
    </div>
    <div>
        <Button text="Chart" handleClick={() => toggleView('chart')} />
    </div>
</div>

<div>
{#if view === 'table'}
    <ContentTable />
{:else if view === 'chart'}
    <ContentChart />
{/if}
</div>




<style>
    /* Customize button styles */
    .view-bar {
        text-align: center; /* Center align the buttons */
        width: 100%;
        overflow-x: auto;
    }
    .button-container {
        display: flex;
        justify-content: center; /* Center align the buttons horizontally */
        gap: 0 2rem;
        width: 100%;
        margin-bottom: 1rem;
    }
</style>