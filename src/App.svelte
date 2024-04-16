<script>
	import { onMount } from "svelte";

	import { gamesData, retentionData } from './store'

	import Header from "./components/Header.svelte"
	import Footer from "./components/Footer.svelte"
	import FilterBar from './components/FilterBar.svelte'
  	import ViewBar from "./components/ViewBar.svelte";

	const DATA_GAMES = "https://storage.googleapis.com/estoty-temp/games.json"
	const DATA_RETENTION = "https://storage.googleapis.com/estoty-temp/retention.json"

	onMount(async () => {
		fetch(DATA_GAMES).then((response) => response.json()).then((data) => {
			gamesData.set(data)
		}).catch((error) => {
			console.error(error)
			return []
		})
		fetch(DATA_RETENTION).then((response) => response.json()).then((data) => {
			retentionData.set(data)
		}).catch((error) => {
			console.error(error)
			return []
		})	
	})
</script>

<Header />
<FilterBar />
<ViewBar />		
<Footer />

<style></style>

