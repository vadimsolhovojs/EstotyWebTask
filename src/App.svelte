<script>
	import { onMount } from "svelte";

	import { gamesData, retentionData, gamesList } from './store'

	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";

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
	{#each $gamesList as game}
		<div><img src={game.icon} /> {game.name} ({game.app_id})</div>
	{/each}
</main>

<Footer />

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}

</style>

