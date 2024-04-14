<script>
    import Select from 'svelte-select';
    
    import { gamesSelectItems, filterByVersion } from '../../store'
    
    function handleChange(event) {
        filterByVersion.set(event.detail.value)
    }
    </script>
    
    <div>
        Versions
        <Select
            items={$gamesSelectItems}
            value={$filterByVersion}
            on:change={handleChange}
            placeholder="Select a country..."
            clearable={false}
            showChevron
        />
    </div>
    
    
    <style>

    </style>