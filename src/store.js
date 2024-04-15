import { writable, derived, get } from 'svelte/store'

import { gamesSort, versionsSort, countriesSort } from '../utils/sorting'
import { trimName } from '../utils/formatting'

export const FILTER_DEFAULT = 'All'
const SELECT_DEFAULT_VALUE = { value: FILTER_DEFAULT, label: 'All' }

export const gamesData = writable([])
export const retentionData = writable([])

// Filters
export const filterById = writable(FILTER_DEFAULT)
export const filterByVersion = writable(FILTER_DEFAULT)
export const filterByCountry = writable(FILTER_DEFAULT)

// Counters
export const versionCounts = writable({})
export const countryCounts = writable({})

export function countDevices() {
    const filteredData = get(retentionDataById)
    const versions = {}
    const countries = {}

    filteredData.map(item => {
        const versionRes = (versions[item.app_ver] || 0) + item.days[0]
        const countryRes = (countries[item.country] || 0) + item.days[0]

        versions[item.app_ver] = versionRes
        countries[item.country] = countryRes
    })

    versionCounts.set(versions)
    countryCounts.set(countries)

    return { versions, countries }
}

export function resetFilters() {
    filterById.set(FILTER_DEFAULT)
    filterByVersion.set(FILTER_DEFAULT)
    filterByCountry.set(FILTER_DEFAULT)
}

export const gamesList = derived(gamesData, ($gamesData) => {
    if ($gamesData.length) {
        return $gamesData.map((game) => game).sort(gamesSort)
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
        console.log(filteredData)
        return filteredData;
})

export const retentionDataById = derived([retentionData, filterById], ([$retentionData, $filterById]) => {
    if ($filterById !== FILTER_DEFAULT) {
        return $retentionData.filter(item => 
            item.app_id === $filterById);
    }
    return []
})

export const gamesSelectItems = derived(gamesList, ($gamesList) => {
    if ($gamesList.length) {
        const result = [SELECT_DEFAULT_VALUE]
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

export const versionSelectItems = derived(
    [versionCounts, filterById],
    ([$versionCounts, $filterById]) => {
        const result = []
        if ($filterById !== FILTER_DEFAULT) {
            for (const [version, devices] of Object.entries($versionCounts)) {
                result.push({
                    value: version,
                    label: `${version} (${devices})`
                })
            }
        }

        const sortedRes = result.sort(versionsSort)
        return [SELECT_DEFAULT_VALUE, ...sortedRes]
})

export const countrySelectItems = derived(
    [countryCounts, filterById],
    ([$countryCounts, $filterById]) => {
        const result = []
        if ($filterById !== FILTER_DEFAULT) {
            for (const [country, devices] of Object.entries($countryCounts)) {
                result.push({
                    value: country,
                    fullLabel: `${country} (${devices})`,
                    label: `${trimName(country, 15)} (${devices})`,
                    devices
                })
            }
        }

        const sortedRes = result.sort(countriesSort)
        return [SELECT_DEFAULT_VALUE, ...sortedRes]
})