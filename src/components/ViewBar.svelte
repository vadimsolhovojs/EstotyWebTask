<script>  
import ContentTable from "./ContentTable.svelte"
import ContentChart from "./ContentChart.svelte"
import Button from './Button.svelte';
let view = 'table'

// Function to toggle between table and chart views
function toggleView(newView) {
    view = newView;
}
</script>

<style>
    /* Customize button styles */
    .view-bar {
      text-align: center; /* Center align the buttons */
    }
  </style>

<div class="view-bar">
    <Button text="Table" handleClick={() => toggleView('table')} />
    <Button text="Chart" handleClick={() => toggleView('chart')} />
  </div>
  

{#if view === 'table'}
    <ContentTable />
{:else if view === 'chart'}
    <ContentChart />
{/if}