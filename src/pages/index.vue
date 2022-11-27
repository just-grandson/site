<script setup lang="ts">
const loading = ref(false)

type Card = {
	id: number
	name: string
	text: string
}

const cards = computedAsync<Card[]>(
	async () => {
		return [
			{
				id: 0,
				name: 'Title of card',
				text: 'Brief description of the card'
			},
		]
	},
	[],
	loading,
)

const router = useRouter()
const openObject = (id: number) => {
	router.push({ name: '//[id]', params: { id } })
}


const closeObject = () => {
	router.push({ name: '/' })
}
</script>

<template>
	<page-layout>
		<div class="header">
			<h1>title of page</h1>
			<p>Subtitle of page</p>
		</div>
		<div class="card-list">
			<template v-if="loading">
				<div class="placeholder-card"></div>
			</template>
			<template v-else>
				<ui-card v-for="card in cards" @click="openObject(card.id)">
					<h3>{{ card.name }}</h3>
					<p>{{ card.text }}</p>
				</ui-card>
			</template>
		</div>
		<router-view v-slot="{ Component }">
			<transition name="modal">
				<div class="window-container" v-if="Component">
					<ui-window @close="closeObject">
						<component :is="Component" />
					</ui-window>
				</div>
			</transition>
		</router-view>
	</page-layout>
</template>


<style scoped lang="scss">
.header {
	line-height: 1.2;

	h1 {
		font-family: var(--font-title);
		font-weight: 800;
		font-size: 42px;
		text-align: center;
		text-transform: uppercase;

		color: var(--color-title);
	}

	p {
		font-family: var(--font-subtitle);
		text-align: center;
		font-weight: 600;
		font-size: 24px;

		color: var(--color-title);
	}
}

.card-list {
	display: grid;
	grid-template-columns: 100%;
	place-items: stretch;
	row-gap: 24px;
	width: 380px;
	max-width: 100%;
	margin: 0 auto;
}

.placeholder-card {
	width: 100%;
	height: 80px;

	background: hsl(255, 0%, 7.5%);
	border-radius: 16px;
}

.window-container {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 0;

	display: grid;
	grid-template-columns: 840px;
	place-content: start center;
}
</style>