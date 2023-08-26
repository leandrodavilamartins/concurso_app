<script>
	import { TextArea, Button, Loading } from 'carbon-components-svelte';
	import { chat } from '$lib/api_init.client';
	import { HumanMessage } from 'langchain/schema';

	$: text = '';
	$: console.log(text);

	async function callToApi() {
		const response = await chat.predictMessages([new HumanMessage(`${text}`)]);
		console.log(response);
	}
</script>

<div class="container">
	<TextArea labelText="Texto" placeholder="Digite aqui o texto a ser traduzido" bind:value={text} />
	<Button on:click={callToApi}>Enviar</Button>
</div>

<style>
	.container {
		display: block;
		margin: auto;
		align-items: center;
	}
</style>
