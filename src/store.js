import { writable, derived } from 'svelte/store';

const FILTER_DEFAULT = 'All'

export const gamesData = writable([])
export const retentionData = writable([])

// Filters
export const filterById = writable(FILTER_DEFAULT)
export const filterByVersion = writable(FILTER_DEFAULT)
export const filterByCountry = writable(FILTER_DEFAULT)

// Counters
const versionCounts = writable({})
const countryCounts = writable({})

const gamesSort = (a, b) => a.name.localeCompare(b.name);

export const gamesList = derived(gamesData, ($gamesData) => {
    if ($gamesData.length) {
        return $gamesData.map((game) => game).sort(gamesSort)
    }
    return []
})

export const gamesSelectItems = derived(gamesList, ($gamesList) => {
    if ($gamesList.length) {
        const result = [{ value: FILTER_DEFAULT, label: 'All' }]
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

export const filteredRetention = derived(
    [retentionData, filterById, filterByVersion, filterByCountry, versionCounts, countryCounts],
    ([$retentionData, $filterById, $filterByVersion, $filterByCountry, $versionCounts, $countryCounts]) => {
        let filteredData = $retentionData

        if ($filterById !== FILTER_DEFAULT) {
            filteredData = $retentionData.filter(item => 
                item.app_id === $filterById);
        }

        if ($filterByVersion !== FILTER_DEFAULT) {
            filteredData = filteredData.filter(item => 
                item.app_ver === $filterByVersion);
        }

        if ($filterByCountry !== FILTER_DEFAULT) {
            filteredData = filteredData.filter(item => 
                item.country === $filterByCountry);
        }

        // console.table(new Set(filteredData.map(item => item.app_ver)))     
        const versions = {}
    const countries = {}

    filteredData.map(item => {
		const versionRes = (versions[item.app_ver] || 0) + item.days[0]
        const countryRes = (countries[item.country] || 0) + item.days[0]

        versions[item.app_ver] = versionRes
        countries[item.country] = countryRes
    })

    // versionCounts.set(versions)
    // countryCounts.set(countries)

    console.log('WTF',$versionCounts, $countryCounts)

        return filteredData;
})

// export const test = derived([filteredRetention, versionCounts, countryCounts], 
//     ($filteredRetention, $versionCounts, $countryCounts) => {
    
//     console.log('WTF',$countryCounts)
// })

export const versionSelectItems = derived(
    [versionCounts],
    ([$versionCounts]) => {
    console.log('VERSION COUNTS', $versionCounts)
})