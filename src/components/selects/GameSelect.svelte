<script>
    import Select from 'svelte-select';

    import { gamesSelectItems, filterById, resetFilters} from '../../store'

    function handleChange(event) {
        resetFilters()
        filterById.set(event.detail.value)
}
</script>

<div>
    <div class="label">Game</div>
    <Select
        items={$gamesSelectItems}
        value={$filterById}
        on:change={handleChange}
        placeholder="Select a game..."
        clearable={false}
        showChevron
    >
        <div slot="item" class="item" let:item let:index>
            {#if index > 0}
                <img src={item.icon} alt={item.label} class="item-icon" />
            {/if}
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

    .item-icon {
        width: 2.5rem;
        height: 2.5rem;
        object-fit: cover;
        border-radius: .25rem;
    }

    .label {
        margin-bottom: 0.25rem;
    }
</style>
