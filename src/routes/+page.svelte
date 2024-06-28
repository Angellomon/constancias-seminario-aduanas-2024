<script>
	import Footer from '$lib/footer.svelte';
	import HeaderTitle from '$lib/header-title.svelte';
</script>

<section class="relative bg-planes-pattern-md xl:bg-planes-pattern-lg 2xl:bg-planes-pattern-xl">
	<HeaderTitle title={'CONSTANCIAS'} />

	<main class="my-10 min-h-[30vh]">
		<p class="text-2xl text-center my-12 text-deep-oak">INDICA A QUÉ EDICIÓN ASISTISTE</p>

		<div class="flex justify-center items-center">
			<a href="/junio">
				<button
					class="py-4 px-8 shadow shadow-slate-800 rounded-full bg-slate-100 border-4 border-slate-300"
				>
					<strong class="text-ecstasy text-2xl"> JUNIO </strong>
				</button>
			</a>
		</div>
	</main>

	<Footer />
</section>
