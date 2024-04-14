<script>
    import Select from 'svelte-select';
    
    import { gamesSelectItems, filterByCountry, countryCounts } from '../../store'
    
    function handleChange(event) {
        filterByCountry.set(event.detail.value)
        console.log(event)
    }
    $: countryNames = []; // This will be re-evaluated whenever countryCounts changes
    // Use a reactive declaration to update countryNames whenever countryCounts changes
    $: {
        countryNames = [];
        for (const item of $countryCounts) {
            countryNames.push(item[0]);
        }
    }
    $: countryDevices = []; // This will be re-evaluated whenever countryCounts changes
    // Use a reactive declaration to update countryNames whenever countryCounts changes
    $: {
        countryDevices = [];
        for (const item of $countryCounts) {
            countryDevices.push(item[1]);
        }
    }
    </script>
    
    <div>
        Countries
        <Select
            items={countryNames}
            value={$filterByCountry}
            on:change={handleChange}
            placeholder="Select a country..."
            clearable={false}
            showChevron
        >
        
        </Select>
    </div>
    
    
    <style>
.item {
        display: flex;
        align-items: center;
        gap: 0 .5rem;
        width: 100%;
    }

    .item-icon {
        width: 2.5rem;
        height: 2.5rem;
        object-fit: cover;
        border-radius: .25rem;
    }
    </style>