<script>
  import { resetFilters } from '../store';
  import GameSelect from './selects/GameSelect.svelte';
  import VersionSelect from './selects/VersionSelect.svelte';
  import CountrySelect from './selects/CountrySelect.svelte';
  import Button from './Button.svelte';
</script>

<div class="filters-container">
    <div class="select-container">
        <GameSelect />
    </div>
    <div class="select-container">
        <VersionSelect />
    </div>
    <div class="select-container">
        <CountrySelect />
    </div>
    <div class="button-container">
        <Button text="RESET" handleClick={() => resetFilters()}>Reset</Button>
    </div>
</div>
  
<style>
    .filters-container {
        display: flex;
        gap: 0 2rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        z-index: 2;
        justify-content: center;
}

    .select-container {
        position: relative;
        width: 300px; /* Adjust width as needed */
}

    .select-container::after {
        font-size: 12px;
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        pointer-events: none;
}

    .button-container {
        margin-top: auto;
}
</style>