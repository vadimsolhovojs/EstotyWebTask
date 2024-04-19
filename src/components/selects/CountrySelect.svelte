<script>
    import Select from 'svelte-select';

    import { countrySelectItems, filterByCountry } from '../../store'

    function handleChange(event) {
        filterByCountry.set(event.detail.value)
    }
</script>
    
<div>
    <div class="label">Country</div>
    <Select
        items={$countrySelectItems}
        value={$filterByCountry}
        on:change={handleChange}
        placeholder="Select a country..."
        clearable={false}
        showChevron
    >
        <div slot="item" class="item" title={item.fullLabel} let:item let:index>
            {item.label}
        </div>
    </Select>
</div>

<style>
    .item {
        display: flex;
        align-items: center;
        gap: 0 .5rem;
        width: 100%;
    }

    .label {
        margin-bottom: 0.25rem;
    }
</style>