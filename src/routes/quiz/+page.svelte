<script>
	import { chat } from '../../lib/api_init.client';
	import { TextArea, Button } from 'carbon-components-svelte';
	import { db } from '../../lib/firebase_api';
	import { collection, getDocs } from 'firebase/firestore';

	$: dataObjects = [];

	async function readDatabase() {
		let localObjects = [];
		const querySnapshot = await getDocs(collection(db, 'questions'));
		querySnapshot.forEach((doc) => {
			localObjects.push(doc.data());
			console.log(doc.data());
		});
		dataObjects = localObjects;
	}
</script>

<div class="container">
	<ul>
		<li>space1</li>
		<li>space2</li>
	</ul>
	<Button on:click={readDatabase}>Teste</Button>
	{#each dataObjects as dataObject}
		<p>{dataObject.question_text}</p>
		<p>{dataObject.category}</p>
		<p>{dataObject.expectedAnswer_text}</p>
	{/each}
</div>
