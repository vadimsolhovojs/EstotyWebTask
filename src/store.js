import { writable, derived } from 'svelte/store';

const FILTER_DEFAULT = 'All'

export const gamesData = writable([])
export const retentionData = writable([])

// Filters
export const filterById = writable(FILTER_DEFAULT)
export const filterByVersion = writable(FILTER_DEFAULT)
export const filterByCountry = writable(FILTER_DEFAULT)

// Counters
// const versionCounts = writable({})
// const countryCounts = writable({})

const gamesSort = (a, b) => 
    a.name.localeCompare(b.name);
const versionSort = (a, b) => 
    a.app_ver.localeCompare(b.app_ver);

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

export const versionSelectItems = derived(retentionData, ($retentionData) => {
    if ($retentionData.length) {
        const result = [{ value: FILTER_DEFAULT, label: 'All' }]
        for (const game of $retentionData) {
            result.push({
                value: game.app_id,
                label: game.app_ver,
            })
        }
        return result
    }
    
    return []
})

export const filteredRetention = derived(
    [retentionData, filterById, filterByVersion, filterByCountry],
    ([$retentionData, $filterById, $filterByVersion, $filterByCountry]) => {
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

        return filteredData;
})

export const versionCounts = derived(
    [filteredRetention], 
    ([$filteredRetention]) => {
    const versions = {}
    $filteredRetention.forEach(item => {
		const versionRes = (versions[item.app_ver] || 0) + item.days[0]
    
        versions[item.app_ver] = versionRes
    })
    
    return Object.entries(versions)
})

export const countryCounts = derived(
    [filteredRetention], 
    ([$filteredRetention]) => {
    const countries = {}
    $filteredRetention.forEach(item => {
        const countryRes = (countries[item.country] || 0) + item.days[0]

    countries[item.country] = countryRes
    })
    
    return Object.entries(countries)
})
// export const test = derived([filteredRetention, versionCounts, countryCounts], 
//     ($filteredRetention, $versionCounts, $countryCounts) => {
    
//     console.log('WTF',$countryCounts)
// })

// export const versionSelectItems = derived(
//     [versionCounts],
//     ([$versionCounts]) => {
//     console.log('VERSION COUNTS', $versionCounts)
// })