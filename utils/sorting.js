export const gamesSort = (a, b) => 
    a.name.localeCompare(b.name)

export const versionsSort = (a, b) => {
    const versionA = a.value.split(".").map(Number)
    const versionB = b.value.split(".").map(Number)
    for (let i = 0; i < versionA.length || i < versionB.length; i++) {
        const aValue = i < versionA.length ? versionA[i] : 0
        const bValue = i < versionB.length ? versionB[i] : 0
        if (aValue > bValue) {
            return -1
        } else if (aValue < bValue) {
            return 1
        }
    }

    return 0
}

export const countriesSort = (a, b) => 
    Number(b.devices) - Number(a.devices)