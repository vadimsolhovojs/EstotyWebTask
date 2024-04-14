<script>
    import Select from 'svelte-select';
    
    import { versionSelectItems, filterByVersion, versionCounts} from '../../store'
    
    
    function handleChange(event) {
        filterByVersion.set(event.detail.value)
    }
    // $: versionNames = []; // This will be re-evaluated whenever countryCounts changes
    // // Use a reactive declaration to update countryNames whenever countryCounts changes
    // $: {
    //     versionNames = [];
    //     for (const item of $versionCounts) {
    //         versionNames.push(item[0]);
    //     }
    // }
    // $: versionDevices = []; // This will be re-evaluated whenever countryCounts changes
    // // Use a reactive declaration to update countryNames whenever countryCounts changes
    // $: {
    //     versionDevices = [];
    //     for (const item of $versionCounts) {
    //         versionDevices.push(item[1]);
    //     }
        
    // }
    </script>
    
    <div>
        Versions
        <Select
            items={$versionSelectItems}
            value={$filterByVersion}
            on:change={handleChange}
            placeholder="Select a country..."
            clearable={false}
            showChevron
        />
    </div>
    
    
    <style>

    </style>