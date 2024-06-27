<script>
	import { browser } from '$app/environment';
	import { downloadCertificate } from '$lib/requests';

	let email = '';
	let loading = false;
	let invalidEmail = false;
	let notFound = false;

	async function download() {
		if (!email || !browser) return;

		loading = true;
		invalidEmail = false;
		notFound = false;

		const errors = await downloadCertificate(email);

		invalidEmail = errors.invalidEmail;
		notFound = errors.notFound;

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

{#if invalidEmail}
	<span class="text-red-600">Correo inválido</span>
{/if}

{#if notFound}
	<span class="text-red-600">Correo no encontrado</span>
{/if}

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<pre>test email: <span class="cursor-pointer" on:click={() => (email = 'test@test.com')}
		>test@test.com</span
	></pre>
