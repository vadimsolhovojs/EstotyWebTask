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
      width: 100%;
      margin-bottom: 1rem;
      z-index: 2;
    }
  
    .select-container {
      position: relative;
      width: 300px; /* Adjust width as needed */
    }
  
    .select-container select {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      appearance: none; /* Remove default dropdown arrow */
      background-color: #fff;
      font-size: 1rem;
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
      margin-top: auto; /* Align the button container to the bottom */
    }
  </style>