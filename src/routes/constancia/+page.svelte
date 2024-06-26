<script>
	import { browser } from '$app/environment';
	import { downloadCertificate } from '$lib/requests';

	let email = '';

	async function download() {
		if (!email || !browser) return;

		await downloadCertificate(email);
	}
</script>

<h1>Descarga de Constancia</h1>

<div class="flex flex-row">
	<input
		bind:value={email}
		class="p-2 border border-slate"
		type="text"
		name="email"
		id="email"
		placeholder="correo"
	/>
	<button class="p-2 hover:underline" on:click={download}>Descargar</button>
</div>
