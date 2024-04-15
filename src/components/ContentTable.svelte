<script>
import { filteredRetention } from '../store.js'
import { trimName } from '../../utils/formatting.js';

function calculateRetentionPercentage(day, entry) {
    return Math.round((entry.days[day] / entry.days[0]) * 100)
}

</script>

<table class="scroll">
  <thead>
    <tr class="freeze freeze-header">
        <th class="freeze freeze-version">Version</th>
        <th class="freeze freeze-country">Country</th>
      {#each Array.from({ length: 91 }, (_, i) => i) as day}
        <th>D{day}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each $filteredRetention as entry}
      <tr>
        <td class="freeze freeze-version">{entry.app_ver}</td>
        <td class="freeze freeze-country">{trimName(entry.country)}</td>
        {#each Array.from({ length: 91 }, (_, i) => i) as day}
          <td>{calculateRetentionPercentage(day, entry)}%</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<style>
    .scroll {
      width: 70%; 
      height: 400px; 
      overflow: auto; 
      display: block; 
      margin-left: 15%; 
    }
    .freeze {
      position: sticky;
      background-color: #f0f0f0; 
      z-index: 1; 
    }
    .freeze-version {
      left: 0; 
      width: 100px
    }
    .freeze-country {
      left: 78px; 
      width: 140px;
      text-wrap: nowrap;
    }
    .freeze-header {
      top: 0; 
      z-index: 2;
    }
    th, td {
      border: 1px solid black;
      padding: 8px;
      text-align: center;
    }
  </style>