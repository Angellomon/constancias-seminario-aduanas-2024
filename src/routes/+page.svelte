<script>
	import Footer from '$lib/footer.svelte';
</script>

<section class="relative bg-planes-pattern-md xl:bg-planes-pattern-lg 2xl:bg-planes-pattern-xl">
	<header class="flex flex-col-reverse sm:flex-row relative items-center justify-evenly py-10">
		<div
			class="absolute z-0 bg-cargo-img-md xl:bg-cargo-img-lg 2xl:bg-cargo-img-xl bg-no-repeat bg-right-bottom sm:bg-[length:70%] bg-cover h-full w-full"
		></div>
		<div
			class="absolute hidden sm:block z-10 bg-gradient-to-r from-white from-40% to-transparent h-full w-full"
		></div>
		<div class="absolute border-4 border-white h-[95%] w-[95%]"></div>

		<h1 class="mb-5 z-20 py-2 px-12 sm:text-4xl text-2xl text-white bg-ecstasy inline-flex">
			<strong> CONSTANCIAS </strong>
		</h1>
		<img class="mb-5 z-20 max-h-[25vh]" src="/img/logo-seminario.png" alt="logo seminario 2024" />
	</header>

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
