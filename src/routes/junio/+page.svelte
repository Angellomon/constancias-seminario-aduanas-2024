<script>
	import { browser } from '$app/environment';
	import Footer from '$lib/footer.svelte';
	import HeaderTitle from '$lib/header-title.svelte';
	import { downloadCertificate } from '$lib/requests';

	let email = '';
	let loading = false;
	let invalidEmail = false;
	let notFound = false;

	async function download() {
		if (!email || !browser) {
			invalidEmail = invalidEmail = true;

			return;
		}

		loading = true;
		invalidEmail = false;
		notFound = false;

		const errors = await downloadCertificate(email);

		invalidEmail = errors.invalidEmail;
		notFound = errors.notFound;

		loading = false;
	}
</script>

<section class="relative bg-planes-pattern-md xl:bg-planes-pattern-lg 2xl:bg-planes-pattern-xl">
	<HeaderTitle title="JUNIO" />

	<main class=" flex flex-col justify-evenly items-center min-h-[30vh] sm:min-h-[50vh]">
		<p class="text-center">Ingresa el correo electrónico con el cual te registraste</p>

		<div class="flex flex-row">
			<input
				bind:value={email}
				class="p-2 px-6 border border-ecstasy-200 text-ecstasy-800 rounded-l-full w-[60vw] sm:w-[30vw]"
				type="email"
				name="email"
				id="email"
				placeholder="correo"
			/>
			<button
				disabled={loading}
				class="p-2 px-6 bg-ecstasy text-white border-t border-r border-b border-ecstasy hover:underline rounded-r-full"
				on:click={download}
			>
				<strong
					>{#if loading}
						Cargando
					{:else}
						Enviar
					{/if}</strong
				>
			</button>
		</div>

		{#if invalidEmail}
			<span class="text-red-600">Correo inválido</span>
		{/if}

		{#if notFound}
			<span class="text-red-600">Correo no encontrado</span>
		{/if}
	</main>

	<Footer />
</section>
