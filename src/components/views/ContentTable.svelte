<script>
import { filteredRetention, countDays } from '../../store.js'
import { trimName } from '../../../utils/formatting.js'

function calculateRetentionPercentage(day, entry) {
    return Math.round((entry.days[day] / entry.days[0]) * 100)
}
</script>

<table class="scroll">
  <thead>
    <tr class="freeze freeze-header">
        <th class="freeze freeze-version">Version</th>
        <th class="freeze freeze-country">Country</th>
      {#each $countDays as day}
        <th>D{day}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each $filteredRetention as entry}
      <tr>
        <td class="freeze freeze-version">{entry.app_ver}</td>
        <td class="freeze freeze-country" title={entry.country}>{trimName(entry.country)}</td>
        {#each $countDays as index}
          <td>{calculateRetentionPercentage(index, entry)}%</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<style>
    tr {
        height: 2.5rem;
    }

    th {
        background-color: #f2f2f2;
    }

    .scroll {
        max-width: 76.825rem;
        max-height: 50rem; 
        overflow: auto; 
        display: block; 
        margin: auto; 
        border-collapse: collapse;
        border: 1px solid #ddd
    }

    .freeze {
        position: sticky;
        background-color: #f0f0f0; 
        z-index: 0.5; 
    }

    .freeze-version {
        left: 0; 
        width: 4.6875rem;
       
    }

    .freeze-country {
        left: 4.625rem; 
        width: 0.75rem;
        text-wrap: nowrap;
    }

    .freeze-header {
        top: 0; 
        z-index: 1;
    }
    
    th, td {
        padding: 0.5rem;
        text-align: center;  
    }
</style>
