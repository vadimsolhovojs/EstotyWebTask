<script>  
import ContentTable from '../views/ContentTable.svelte'
import ContentChart from '../views/ContentChart.svelte'
import Button from '../Button.svelte'

let view = 'table'

function toggleView(newView) {
    view = newView
}
</script>

<div class="button-container">
    <div>
        <Button on:click={() => toggleView('table')}>Table View</Button>
    </div>
    <div>
        <Button on:click={() => toggleView('chart')}>Chart View</Button>
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
