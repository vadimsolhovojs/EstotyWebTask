<script>
	import { onMount } from "svelte";

	import { gamesData, retentionData, gamesSelectItems } from './store'

	import Header from "./components/Header.svelte"
	import Footer from "./components/Footer.svelte"
	import FilterBar from './components/FilterBar.svelte'

	const DATA_GAMES = "https://storage.googleapis.com/estoty-temp/games.json"
	const DATA_RETENTION = "https://storage.googleapis.com/estoty-temp/retention.json"

	onMount(async () => {
		fetch(DATA_GAMES).then((response) => response.json()).then((data) => {
			console.log('GAMES', data)
			gamesData.set(data)
		}).catch((error) => {
			console.error(error)
			return []
		})
		fetch(DATA_RETENTION).then((response) => response.json()).then((data) => {
			console.log('RETENTION', data)
			retentionData.set(data)
		}).catch((error) => {
			console.error(error)
			return []
		})
	})
</script>

<Header />
<main>
	<FilterBar />
</main>
<Footer />

<style>
	main {
		display:flex;
		flex-grow: 1;
		text-align: center;
		align-items: end;
		max-width: 60rem;
		margin: 6.25rem auto;
	}
</style>

