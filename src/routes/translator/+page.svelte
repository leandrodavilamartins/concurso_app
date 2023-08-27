<script>
	import { TextArea, Button, Loading } from 'carbon-components-svelte';
	import { chat } from '$lib/api_init.client';
	import { HumanMessage, SystemMessage } from 'langchain/schema';

	$: text = '';
	$: translatedText = '';

	let loaderOn = false;

	async function callToApi() {
		loaderOn = true;
		const response = await chat.predictMessages([
			new SystemMessage('You are a helpful assistant that translates Portuguese to English'),
			new HumanMessage(`${text}`)
		]);
		console.log(response.content);
		translatedText = response.content;
		loaderOn = false;
	}
</script>

<div class="container">
	<TextArea labelText="Texto" placeholder="Digite aqui o texto a ser traduzido" bind:value={text} />
	<Button on:click={callToApi}>Enviar</Button>
</div>
{#if loaderOn}
	<Loading />
{/if}

<div>
	<p>{translatedText}</p>
</div>

<style>
	.container {
		display: block;
		margin: auto;
		align-items: center;
	}
</style>
