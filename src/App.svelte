<script>
	import { onMount } from "svelte";

	import { 
		gamesData,
		retentionData,
		gamesSelectItems,
		filteredRetention,
		filterByVersion,
		filterByCountry,
		// versionSelectItems,
		// test
	} from './store'

	import Header from "./components/Header.svelte"
	import Footer from "./components/Footer.svelte"
	import FilterBar from './components/FilterBar.svelte'

	const DATA_GAMES = "https://storage.googleapis.com/estoty-temp/games.json"
	const DATA_RETENTION = "https://storage.googleapis.com/estoty-temp/retention.json"

	onMount(async () => {
		fetch(DATA_GAMES).then((response) => response.json()).then((data) => {
			// console.log('GAMES', data)
			gamesData.set(data)
		}).catch((error) => {
			console.error(error)
			return []
		})
		fetch(DATA_RETENTION).then((response) => response.json()).then((data) => {
			// console.log('RETENTION', data)
			retentionData.set(data)
		}).catch((error) => {
			console.error(error)
			return []
		})
	})

	const data = [
    {app_id: '3', app_ver: '1.0.0', country: 'Nauru', days: [10, 5, 2]},
    {app_id: '1', app_ver: '1.0.0', country: 'Samoa', days: [5, 3, 6]},
    {app_id: '1', app_ver: '2.0.0', country: 'Nauru', days: [20, 30, 3]},
	{app_id: '1', app_ver: '2.0.0', country: 'Samoa', days: [35, 30, 3]},
	{app_id: '3', app_ver: '4.0.0', country: 'Latvia', days: [69, 30, 3]},
	{app_id: '3', app_ver: '6.0.0', country: 'Latvia', days: [100, 30, 3]},
	{app_id: '3', app_ver: '4.0.0', country: 'Samoa', days: [44, 30, 3]},
]

// Filter function
function filterData(appId, selectedAppVer, selectedCountry) {
	
    let filteredData = data

	if (appId !== 'All') {
		filteredData = data.filter(item => item.app_id === appId);
	}

    if (selectedAppVer !== 'All') {
        filteredData = filteredData.filter(item => item.app_ver === selectedAppVer);
    }

    if (selectedCountry !== 'All') {
        filteredData = filteredData.filter(item => item.country === selectedCountry);
    }

	console.log('FILTER', filteredData)

    return filteredData;
}

// Function to display filtered data
function displayFilteredData(filteredData) {
    const versionCounts = {};
    const countryCounts = {};

    filteredData.map(item => {
		const versionRes = (versionCounts[item.app_ver] || 0) + item.days[0]
        const countryRes = (countryCounts[item.country] || 0) + item.days[0]

        versionCounts[item.app_ver] = versionRes
        countryCounts[item.country] = countryRes
    });

	console.group()
    console.log('Version Filter:', versionCounts);
    Object.keys(versionCounts).forEach(version => {
        console.log(`${version} (${versionCounts[version]})`);
    });

    console.log('\nCountry Filter:');
    Object.keys(countryCounts).forEach(country => {
        console.log(`${country} (${countryCounts[country]})`);
    });
	console.groupEnd()
}

// Sample filter scenarios
const filteredData1 = filterData('All', 'All', 'All');
displayFilteredData(filteredData1);

const filteredData2 = filterData('1', '1.0.0', 'All');
displayFilteredData(filteredData2);

const filteredData3 = filterData('1', 'All', 'Samoa');
displayFilteredData(filteredData3);

const filteredData4 = filterData('2', 'All', 'Samoa');
displayFilteredData(filteredData4);

const filteredData5 = filterData('All', 'All', 'Latvia');
displayFilteredData(filteredData5);

function setVersionFilter() {
	$filterByVersion = '9.0.0'
}
function setCountryFilter() {
	$filterByCountry = 'Luxembourg'
}
// function getData() {
// 	console.log($test)
// }
</script>

<Header />
<main>
	<FilterBar />
	<button on:click={() => setVersionFilter('9.0.0')}>SET 9.0.0</button>
	<button on:click={() => setCountryFilter('Luxembourg')}>SET LUX</button>
	<!-- <button on:click={() => getData()}>TEST</button> -->
	{JSON.stringify($filteredRetention)}
</main>
<Footer />

<style>
	main {
		display:flex;
		flex-direction: column;
		text-align: center;
		align-items: end;
		max-width: 60rem;
		margin: 6.25rem auto;
	}
</style>

