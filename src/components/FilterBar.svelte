<script>
import Select from 'svelte-select';

import { gamesSelectItems } from '../store'

</script>

<Select items={$gamesSelectItems} label="Labels" placeholder="Select a game..." >
    <div slot="item" class="item" let:item let:index>
        {#if index > 0}
            <img src={item.icon} alt={item.label} class="item-icon" />
        {/if}
        {item.label}
    </div>
</Select>


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