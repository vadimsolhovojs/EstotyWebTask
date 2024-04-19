export const getData = (endpoint, dataStore) => {
    fetch(endpoint).then((response) => response.json()).then((data) => {
        dataStore.set(data)
    }).catch((error) => {
        console.error(error)
        return []
    })
}