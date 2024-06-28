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

<footer class=" w-full flex flex-wrap flex-row items-center justify-around bg-ecstasy p-5">
	{#each logos as logo}
		<div class="m-3 flex justify-center items-center rounded-full w-20 h-20 bg-white">
			<img class="max-h-14" src={logo.url} alt={logo.name} />
		</div>
	{/each}
</footer>
