<script>
	import { TextArea, Button, Select, SelectItem } from 'carbon-components-svelte';
	import { db } from '../../lib/firebase_api';
	import { collection, addDoc } from 'firebase/firestore';

	$: question = '';
	$: expectedAnswer = '';
	$: selected = 'mt';

	$: questionData = {
		question_text: question,
		expectedAnswer_text: expectedAnswer,
		category: selected
	};

	// here comes the firebase api call
	async function firebaseCreate() {
		console.log(db);
		console.log(questionData);
		const res = await addDoc(collection(db, 'questions'), questionData);
		console.log(res);
	}

	// test function
	function Test() {
		console.log(question);
		console.log(expectedAnswer);
		console.log(selected);
	}
</script>

<div class="container">
	<TextArea labelText="Digite a questão" bind:value={question} />
	<TextArea labelText="Digite aqui a resposta esperada" bind:value={expectedAnswer} />
	<Select hideLabel labelText="Carbon theme" bind:selected>
		<SelectItem value="mt" text="Clínica" />
		<SelectItem value="leg" text="Legislação" />
	</Select>
	<Button on:click={firebaseCreate}>Enviar</Button>
</div>
