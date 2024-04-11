<script>
	import { onMount } from "svelte";

	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";

	const DATA_GAMES = "https://storage.googleapis.com/estoty-temp/games.json"
	const DATA_RETENTION = "https://storage.googleapis.com/estoty-temp/retention.json"

	onMount(async () => {
		fetch(DATA_GAMES).then((response) => response.json()).then((data) => {
			console.log('GAMES', data)
		}).catch((error) => {
			console.error(error)
			return []
		})
		fetch(DATA_RETENTION).then((response) => response.json()).then((data) => {
			console.log('RETENTION', data)
		}).catch((error) => {
			console.error(error)
			return []
		})
	})
</script>

<Header />

<main>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel scelerisque lectus. In a metus luctus, tempus lectus at, vulputate ante. Nam imperdiet, ligu
		la vel semper vulputate, magna justo varius tellus, et dignissim dolor dolor ornare sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
		 ridiculus mus. Nullam consectetur scelerisque cursus. Quisque in est urna. Donec semper gravida massa, eget vehicula neque tincidunt ac. Mauris at vehicula risus, 
		 nec faucibus dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel scelerisque lectus. In a metus luctus, tempus lectus at, vulputate ante. 
		 Nam imperdiet, ligula vel semper vulputate, magna justo varius tellus, et dignissim dolor dolor ornare sapien. Orci varius natoque penatibus et magnis dis parturient 
		 montes, nascetur ridiculus mus. Nullam consectetur scelerisque cursus. Quisque in est urna. Donec semper gravida massa, eget vehicula neque tincidunt ac. Mauris at 
		 vehicula risus, nec faucibus dolor.</p>
</main>

<Footer />

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}

</style>

