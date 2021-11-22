<template>

	<header>
		<h1>Krello</h1>
	</header>

	<div class="wrapper">
		<list @addNewCard="addToList"
			  v-for="list in LISTS"
			  :list="list">
		</list>

		<div class="form-new-list">
			<input v-model="newListTitle"
				   type="text"
				   placeholder="Title for new List"
				   class="form-new-list__input form-control">
			<button @click="addList" class="form-new-list__btn btn btn-primary">Add List</button>
		</div>
	</div>


</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import List from '@/components/List.vue';
import Card from '@/models/CardModel';
import {mapGetters, mapMutations} from "vuex";

@Options({
	components: {
		List,
	},
	data() {
		return {
			newListTitle: '',
			nextListId: 3,
			nextCardId: 4,
		}
	},
	methods: {
		...mapMutations([
			'ADD_NEW_LIST', 'ADD_NEW_CARD_TO_LIST', 'INCREMENT_CARD_ID'
		]),
		addToList(payload: Card) {
			this.ADD_NEW_CARD_TO_LIST(payload)
			this.INCREMENT_CARD_ID()
		},
		addList() {
			this.ADD_NEW_LIST({
				id: this.nextListId++,
				title: this.newListTitle,
				cards: []
			})
			this.newListTitle = ''
		},
	},
	computed: {
		...mapGetters(['LISTS'])
	}
})
export default class App extends Vue {

}
</script>

<style>
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

body {
	font-family: 'Rubik', sans-serif;
	background-color: #0079BF;
}

header {
	padding-top: 10px;
	padding-left: 10px;
	background-color: #004269;
	color: white;
}

.wrapper {
	display: flex;
	justify-content: space-evenly;
	text-align: center;
	margin-top: 60px;
}

.form-new-list {
	height: max-content;
	padding: 10px;
	background-color: #EBECF0;
	border-radius: 5px;
}

.form-new-list__input {
	margin-bottom: 5px;
}
</style>
