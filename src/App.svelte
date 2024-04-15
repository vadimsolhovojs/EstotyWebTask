<script>
	import { onMount } from "svelte";

	import { 
		gamesData,
		retentionData,
		gamesSelectItems,
		filteredRetention,
		filterById,
		filterByVersion,
		filterByCountry,
		versionCounts,
		countryCounts,
		countDevices,
    	resetFilters,
		// versionSelectItems,
		// test
	} from './store'

	import Header from "./components/Header.svelte"
	import Footer from "./components/Footer.svelte"
	import FilterBar from './components/FilterBar.svelte'
  import ContentTable from "./components/ContentTable.svelte";

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

		filteredRetention.subscribe(() => {
			if ($filterById !== 'All') {
				countDevices()
			}
			console.log('COUNT DEVICES', $versionCounts, $countryCounts)
		})
	})



$: console.log('VERSIONS', $versionCounts)
$: console.log('COUNTRIES', $countryCounts)
</script>

<Header />
<main>
	<FilterBar />
	<button on:click={() => resetFilters()} title="HELLO">RESET</button>
	<!-- <button on:click={() => getData()}>TEST</button> -->
	<!-- {JSON.stringify($filteredRetention)} -->
	<!-- {versionCountryCounts} -->
	
</main>
<ContentTable />
		
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

