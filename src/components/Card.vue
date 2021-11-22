<template>
	<li class="card">
		{{ card.title }}
	</li>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import Card from '@/models/CardModel';
import {mapGetters} from "vuex";

export default defineComponent({
	name: 'Card',
	props: {
		card: {
			type: Object as PropType<Card>,
			required: true,
		},
	},
	computed: {}
});
</script>

<style scoped>
.card {
	background-color: #fff;
	padding: 5px;
	border: silver 1px solid;
	border-radius: 5px;
	margin-bottom: 10px;
}
</style>