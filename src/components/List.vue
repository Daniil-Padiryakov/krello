<template>

	<div class="list">
		<div class="list__title">{{ list.title }}</div>

		<ul class="list__body">
			<draggable v-model="list.cards"
					   group="cards"
					   item-key="id">

				<template #item="{ element }">
					<card-item :card="element"></card-item>
				</template>

			</draggable>
		</ul>

		<input v-model="newCardTitle"
			   class="list__input form-control"
			   type="text"
			   placeholder="Title for new card">
		<button @click="addNewCard(list.id)"
				class="list__btn btn btn-primary">Add Card
		</button>
	</div>

</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import CardItem from '@/components/Card.vue';
import List from '@/models/ListModel';
import draggable from 'vuedraggable'
import {mapGetters} from "vuex";

export default defineComponent({
	name: 'List',
	emits: ['addNewCard'],
	components: {
		CardItem, draggable
	},
	props: {
		list: {
			type: Object as PropType<List>,
			required: true,
			default: {},
		},
	},
	data() {
		return {
			newCardTitle: '',
		}
	},
	methods: {
		addNewCard(listId: number) {
			this.$emit('addNewCard', {id: this.NEXT_CARD_ID, listId: listId, title: this.newCardTitle})
			this.newCardTitle = ''
		}
	},
	computed: {
		...mapGetters(['NEXT_CARD_ID'])
	}
});
</script>

<style scoped>
.list {
	background-color: #EBECF0;
	padding: 15px;
	border-radius: 5px;
	height: max-content;
	margin-right: 10px;
}

.list__title {
	margin-bottom: 5px;
}

.list__body {
	list-style: none;
	padding: 0;
	margin-bottom: 20px;
}

.list__input {
	margin-right: 5px;
	margin-bottom: 5px;
	padding: 10px;
}

.list__btn {
	justify-self: flex-start
}
</style>
