<script>
	const logos = [
		{
			name: 'aduanas',
			url: '/img/logo-aduanas.png'
		},
		{
			name: 'caaarem',
			url: '/img/logo-caaarem.png'
		},
		{
			name: 'canadian-beef',
			url: '/img/logo-canadian-beef.png'
		},
		{
			name: 'usa-poultry-egg',
			url: '/img/logo-usa-poultry-egg.png'
		},
		{
			name: 'us-meat',
			url: '/img/logo-us-meat.png'
		},
		{
			name: 'us-beef',
			url: '/img/logo-us-beef.png'
		},
		{
			name: 'senasica',
			url: '/img/logo-senasica.png'
		},
		{
			name: 'canada',
			url: '/img/logo-canada.png'
		},
		{
			name: 'usda',
			url: '/img/logo-usda.png'
		},
		{
			name: 'comecarne',
			url: '/img/logo-comecarne.png'
		}
	];
</script>

<footer class="flex flex-col items-center justify-center w-full bg-ecstasy p-5">
	<div class="h-[2px] mb-2 bg-white w-[50vw]"></div>
	<div class="mt-2 flex flex-wrap flex-row items-center justify-around">
		{#each logos as logo}
			<div
				class="m-1 p-3 sm:m-3 flex justify-center items-center rounded-full h-14 w-14 sm:w-20 sm:h-20 bg-white"
			>
				<img src={logo.url} alt={logo.name} />
			</div>
		{/each}
	</div>
</footer>
