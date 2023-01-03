<script lang="ts">
	import { scale } from 'svelte/transition';

	export let data: any;
</script>

<div class="px-6 mx-auto my-10 text-center">
	<p>&nbsp;</p>
	<h1 class="text-4xl font-bold my-10">N8N Automation Ideas</h1>
	<p>
		Collecting here the top N8N automations we have made for customers and for ourselves or
		friends/family at home. Votes are currently only by selected CrewNew core team members and some
		colse friends. Improving this list actively and public voting will be opened soon🙂
	</p>
	{#each data.cms as page_content}
		<p class="text-xl font-bold mt-10">
			{page_content.name}
		</p>
		<p class="mt-1">
            {#if page_content.description_short}
				<p class="mt-1">{page_content.description_short}
                </p>
			{/if}
			Upvotes: {page_content.vote}&nbsp;&nbsp;&nbsp;Difficulty: {page_content.difficulty}
		</p>
	{/each}
	<p>&nbsp;</p>
	<p class="pb-5">
		<a class="text-blue-500" href="https://crewnew.com/"
			>CrewNew - Top European Programmers to outsource, outstaff and freelance base>></a
		>
	</p>
</div>
