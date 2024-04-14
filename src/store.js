import { writable, derived } from 'svelte/store';

export const gamesData = writable([])
export const retentionData = writable([])

const gamesSort = (a, b) => a.name.localeCompare(b.name);

export const gamesList = derived(gamesData, ($gamesData) => {
    if ($gamesData.length) {
        return $gamesData.map((game) => game).sort(gamesSort)
    }
    return []
})

export const gamesSelectItems = derived(gamesList, ($gamesList) => {
    if ($gamesList.length) {
        const result = [{ value: '', label: 'All' }]
        for (const game of $gamesList) {
            result.push({
                value: game.app_id,
                label: game.name,
                icon: game.icon,
            })
        }
        return result
    }
    return []
})