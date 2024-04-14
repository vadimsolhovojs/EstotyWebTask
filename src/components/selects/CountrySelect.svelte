<script>
    import Select from 'svelte-select';
    
    import { gamesSelectItems, filterByCountry } from '../../store'
    
    function handleChange(event) {
        filterByCountry.set(event.detail.value)
    }
    </script>
    
    <div>
        Countries
        <Select
            items={$gamesSelectItems}
            value={$filterByCountry}
            on:change={handleChange}
            placeholder="Select a country..."
            clearable={false}
            showChevron
        />
    </div>
    
    
    <style>

    </style>