<script>
	import { browser } from '$app/environment';
	import { downloadCertificate } from '$lib/requests';

	let email = '';
	let loading = false;

	async function download() {
		if (!email || !browser) return;

		loading = true;

		await downloadCertificate(email);

		loading = false;
	}
</script>

<h1>Descarga de Constancia</h1>

<div class="flex flex-row">
	<input
		bind:value={email}
		class="p-2 border border-slate"
		type="email"
		name="email"
		id="email"
		placeholder="correo"
	/>
	<button
		disabled={loading}
		class="p-2 bg-slate-100 border-t border-r border-b border-slate hover:underline"
		on:click={download}
	>
		{#if loading}
			Cargando
		{:else}
			Descargar
		{/if}
	</button>
</div>

<span>test email: test@test.com</span>
