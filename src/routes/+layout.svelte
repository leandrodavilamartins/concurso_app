<script>
	import 'carbon-components-svelte/css/g90.css';
	import { Link } from 'carbon-components-svelte';
</script>

<div class="container">
	<nav>
		<Link href="/translator">Translator</Link>
	</nav>
</div>
<slot />

<style>
	.container {
		display: flex;
		margin: auto;
		align-items: center;
	}
	nav {
		display: flex;
		margin: auto;
	}
</style>
