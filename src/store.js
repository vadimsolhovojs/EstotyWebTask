import { writable, derived } from 'svelte/store';

export const gamesData = writable([])
export const retentionData = writable([])

export const gamesList = derived(gamesData, ($gamesData) => {
    if ($gamesData.length) {
        return $gamesData.map((game) => game)
    }
    return []
})