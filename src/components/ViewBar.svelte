<script>  
import ContentTable from "./ContentTable.svelte"
import ContentFlexboxTable from "./ContentFlexboxTable.svelte"
import ContentChart from "./ContentChart.svelte"
import Button from './Button.svelte';

let view = 'table'

function toggleView(newView) {
    view = newView;
}
</script>

<div class="button-container">
    <div>
        <Button text="Table View" handleClick={() => toggleView('table')} />
    </div>
    <div>
        <Button text="Chart View" handleClick={() => toggleView('chart')} />
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
    .button-container {
        display: flex;
        justify-content: center;
        gap: 0 2rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
    }
</style>