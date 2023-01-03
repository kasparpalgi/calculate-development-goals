<script lang="ts">
	let tooMuch: number = 0;
	let quality: number = 75;
	let speed: number = 75;
	let speedLocked: boolean = false;
	let cost: number = 75;
	let done: number = 75;
	let projectSize: number = 15;

	$: minCost = Math.round(270 * (projectSize * 2));
	$: maxCost = Math.round(400 * (projectSize * 2.5));

	function reCalculateQuality() {
		tooMuch = (quality + speed + cost + done - 300) / 3;
		if (!speedLocked) {
		}

		cost -= tooMuch;
		done -= tooMuch;
	}

	function reCalculateSpeed() {
		tooMuch = (quality + speed + cost + done - 300) / 3;
		quality -= tooMuch;
		cost -= tooMuch;
		done -= tooMuch;
	}

	function reCalculateCost() {
		tooMuch = (quality + speed + cost + done - 300) / 3;
		speed -= tooMuch;
		quality -= tooMuch;
		done -= tooMuch;
	}

	function reCalculateDone() {
		tooMuch = (quality + speed + cost + done - 300) / 3;
		speed -= tooMuch;
		cost -= tooMuch;
		quality -= tooMuch;
	}
	function sampleOne() {
		quality = 100;
		speed = 70;
		cost = 50;
		done = 80;
	}
	function sampleTwo() {
		quality = 40;
		speed = 65;
		cost = 100;
		done = 95;
	}
</script>

<div class="px-6 mx-auto my-10 text-center">
	<p>&nbsp;</p>
	<h1 class="text-4xl font-bold my-10">Set Your Development Goals</h1>
	<p>
		Customers and product owners often want all four from the following list of four qualities but
		you can pick only three. Or give up a little from all of them or any other combinations. That’s
		a fundamental law of any project (not just a software development project). Read more here: <a
			class="text-blue-500"
			href="https://medium.com/crewnew-com/agile-software-craftsmanship-by-uncle-bob-377882b3d8b"
			>Agile Software Craftsmanship by Uncle Bob>></a
		>
	</p>
	<p>&nbsp;</p>
	<p class="text-xl font-bold">PROJECT SIZE (average cost €{minCost} - €{maxCost})</p>
	<input type="range" min="1" max="100" bind:value={projectSize} class="range" step="1" />
	<div class="w-full flex justify-between text-xs px-2">
		<span>Small</span>
		<span>Medium</span>
		<span>Bigger</span>
		<span>Large</span>
		<span>Enterprise</span>
	</div>
	<p>&nbsp;</p>
	<div class="mx-5 my-8 md:mx-20">
		<p class="text-xl font-bold">QUALITY</p>
		<input
			type="range"
			min="1"
			max="100"
			bind:value={quality}
			class="range"
			step="1"
			on:change={reCalculateQuality}
		/>
		<div class="w-full flex justify-between text-xs px-2">
			<span>Not working</span>
			<span>Terrible</span>
			<span>Messy</span>
			<span>Okeish</span>
			<span>Clean</span>
		</div>
	</div>
	<div class="mx-5 my-8 md:mx-20">
		<p class="text-xl font-bold">
			SPEED
			<!-- TODO: add possibility to lock values
				&nbsp;&nbsp;&nbsp;<input type="checkbox" bind:checked={speedLocked} class="checkbox" /> <small>lock</small>-->
		</p>
		<input
			type="range"
			min="1"
			max="100"
			bind:value={speed}
			class="range"
			step="1"
			on:change={reCalculateSpeed}
		/>
		<div class="w-full flex justify-between text-xs px-2">
			<span>DIY from free time</span>
			<span>Takes ages</span>
			<span>Slow</span>
			<span>Okeish</span>
			<span>Fast</span>
		</div>
	</div>
	<div class="mx-5 my-8 md:mx-20">
		<p class="text-xl font-bold">PRICE</p>
		<input
			type="range"
			min="1"
			max="100"
			bind:value={cost}
			class="range"
			step="1"
			on:change={reCalculateCost}
		/>
		<div class="w-full flex justify-between text-xs px-2">
			<span>€{maxCost + 750 * 2}</span>
			<span>€{maxCost}</span>
			<span>€{Math.round((minCost + maxCost) / 1.7)}</span>
			<span>€{(minCost + maxCost) / 2}</span>
			<span>€{minCost}</span>
		</div>
	</div>
	<div class="mx-5 my-8 md:mx-20">
		<p class="text-xl font-bold">DONE</p>
		<input
			type="range"
			min="1"
			max="100"
			bind:value={done}
			class="range"
			step="1"
			on:change={reCalculateDone}
		/>
		<div class="w-full flex justify-between text-xs px-2">
			<span>Nothing this time😄</span>
			<span>Little done</span>
			<span>Drop a lot</span>
			<span>Compromises</span>
			<span>All done</span>
		</div>
	</div>
	<p>&nbsp;</p>
	<p>
		Move the knobs to define the optimal outcome considering the needs, budget and time you can
		afford to wait. Click to see samples:<br />
		<button on:click={sampleOne} class="text-blue-500">SAMPLE1</button> - giving up a bit in speed,
		cost and what will be done to get a good quality. Good choise but expensive.
		<br /> <button on:click={sampleTwo} class="text-blue-500">SAMPLE2</button> - giving up a lot in speed
		but also in quality to get it damn cheap and everything completed - not a good choice but often this
		choice is the reality.
	</p>
	<p>&nbsp;</p>
	<p>
		Built with ❤️ using SvelteKit by <a class="text-blue-500" href="https://crewnew.com"
			>@kaspar from CrewNew</a
		>. See the
		<a class="text-blue-500" href="https://github.com/crewnew-git/calculate-development-goals"
			>code in GitHub>></a
		>
	</p>
	<p>&nbsp;</p>
</div>
