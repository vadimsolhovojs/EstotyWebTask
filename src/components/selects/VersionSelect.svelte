<script>
import Select from 'svelte-select';

import { versionSelectItems, filterByVersion } from '../../store'


function handleChange(event) {
    filterByVersion.set(event.detail.value)
}
</script>

<div>
    Version
    <Select
        items={$versionSelectItems}
        value={$filterByVersion}
        on:change={handleChange}
        placeholder="Select a country..."
        clearable={false}
        showChevron
    />
</div>