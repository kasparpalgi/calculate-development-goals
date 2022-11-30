<script lang="ts">
    let tooMuch: number = 0;
	let quality: number = 75;
	let speed: number = 75;
	let cost: number = 75;
	let done: number = 75;

    function reCalculateQuality() {
        tooMuch = ((quality + speed + cost + done) - 300) / 3;
        speed -= tooMuch;
        cost -= tooMuch;
        done -= tooMuch;
    }

    function reCalculateSpeed() {
        tooMuch = ((quality + speed + cost + done) - 300) / 3;
        quality -= tooMuch;
        cost -= tooMuch;
        done -= tooMuch;
    }

    function reCalculateCost() {
        tooMuch = ((quality + speed + cost + done) - 300) / 3;
        speed -= tooMuch;
        quality -= tooMuch;
        done -= tooMuch;
    }

    function reCalculateDone() {
        tooMuch = ((quality + speed + cost + done) - 300) / 3;
        speed -= tooMuch;
        cost -= tooMuch;
        quality -= tooMuch;
    }

</script>

<div class="px-6 mx-auto my-10 text-center">
	<p>&nbsp;</p>
	<h1 class="text-4xl font-bold my-10">Set Your Development Goals</h1>
	<p>Customers and product owners often want all four from the following list of four qualities but you can pick only three. Or give up a little from all of them or any other combinations. That’s a fundamental law of any project (not just a software development project). Read more here: <a class="text-blue-500" href="https://medium.com/crewnew-com/agile-software-craftsmanship-by-uncle-bob-377882b3d8b">Agile Software Craftsmanship by Uncle Bob>></a></p>
	<div class="mx-20 my-8">
        <p class="text-xl font-bold">QUALITY</p>
		<input type="range" min="1" max="100" bind:value={quality} class="range" step="1" on:change={reCalculateQuality} />
		<div class="w-full flex justify-between text-xs px-2">
			<span>Not working</span>
			<span>Terrible</span>
			<span>Messy</span>
			<span>Okeish</span>
			<span>Clean</span>
		</div>
	</div>
    <div class="mx-20 my-8">
        <p class="text-xl font-bold">SPEED</p>
		<input type="range" min="1" max="100" bind:value={speed} class="range" step="1" on:change={reCalculateSpeed} />
		<div class="w-full flex justify-between text-xs px-2">
			<span>DIY from free time</span>
			<span>Takes ages</span>
			<span>Slow</span>
			<span>Okeish</span>
			<span>Fast</span>
		</div>
	</div>
    <div class="mx-20 my-8">
        <p class="text-xl font-bold">PRICE</p>
		<input type="range" min="1" max="100" bind:value={cost} class="range" step="1" on:change={reCalculateCost} />
		<div class="w-full flex justify-between text-xs px-2">
			<span>Enterprice</span>
			<span>Very expensive</span>
			<span>Expensive</span>
			<span>Reasonable</span>
			<span>Cheap</span>
		</div>
	</div>
    <div class="mx-20 my-8">
        <p class="text-xl font-bold">DONE</p>
		<input type="range" min="1" max="100" bind:value={done} class="range" step="1" on:change={reCalculateDone} />
		<div class="w-full flex justify-between text-xs px-2">
			<span>Nothing this time😄</span>
			<span>Little done</span>
			<span>Drop a lot</span>
			<span>Compromises</span>
			<span>All done</span>
		</div>
	</div>
    <p>&nbsp;</p>
	<p>Built with ❤️ using SvelteKit by <a  class="text-blue-500" href="https://crewnew.com">@kaspar from CrewNew</a>. See the <a class="text-blue-500" href="https://github.com/crewnew-git/calculate-development-goals">code in GitHub>></a></p>
	<p>&nbsp;</p>
</div>
