<script>
  import { resetFilters } from '../store';
  import GameSelect from './selects/GameSelect.svelte';
  import VersionSelect from './selects/VersionSelect.svelte';
  import CountrySelect from './selects/CountrySelect.svelte';
  import Button from './Button.svelte';
</script>

<div class="filters-container">
<div>
    <GameSelect />
</div>
<VersionSelect />
<CountrySelect />
<div class="button"><Button  text ="RESET" handleClick={() => resetFilters()}>WATAFAAAK</Button></div>
</div>


<style>
    .filters-container {
        display: flex;
        gap: 0 2rem;
        width: 100%;
        margin-bottom: 1rem;
    }
    .button {
        display: block;
    }
</style>