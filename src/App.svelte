<script>
	import { onMount } from "svelte";

	import { gamesData, retentionData } from './store'
	import { getData } from './services/api'

	import Header from "./components/layout/Header.svelte"
	import Footer from "./components/layout/Footer.svelte"
	import FilterBar from './components/layout/FilterBar.svelte'
  	import ViewBar from "./components/layout/ViewBar.svelte";

	const GAMES_ENDPOINT = "https://storage.googleapis.com/estoty-temp/games.json"
	const RETENTION_ENDPOINT = "https://storage.googleapis.com/estoty-temp/retention.json"

	onMount(async () => {
		getData(GAMES_ENDPOINT, gamesData)
		getData(RETENTION_ENDPOINT, retentionData)
	})
</script>

<Header />
<FilterBar />
<ViewBar />		
<Footer />
