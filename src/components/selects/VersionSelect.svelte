<script>
    import Select from 'svelte-select';

    import { versionSelectItems, filterByVersion } from '../../store'

    function handleChange(event) {
        filterByVersion.set(event.detail.value)
    }
</script>

<div>
    <div class="label">Version</div>
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
    .label {
        margin-bottom: 0.25rem;
    }
</style>