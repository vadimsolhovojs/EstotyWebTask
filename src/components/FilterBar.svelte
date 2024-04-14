<script>
  import { filterById, filterByVersion, filterByCountry } from '../store';
  import GameSelect from './selects/GameSelect.svelte';
  import VersionSelect from './selects/VersionSelect.svelte';
  import CountrySelect from './selects/CountrySelect.svelte';
</script>

<div class="filters-container">
<GameSelect />
<VersionSelect />
<CountrySelect />
</div>

<div class="debug">
    ID: {$filterById}
    VER: {$filterByVersion}
    COUNTRY: {$filterByCountry}
</div>
<style>
    .filters-container {
        display: flex;
        gap: 0 2rem;
        width: 100%;
        margin-bottom: 1rem;
    }
</style>