import {createStore} from 'vuex';
import List from '@/models/ListModel.ts';
import Card from '@/models/CardModel.ts';

export default createStore({
    state: {
        lists: [
            {id: 0, title: 'TODO', cards: [{id: 0, title: 'Task 1',}, {id: 1, title: 'Task 2',}]},
            {id: 1, title: 'In Progress', cards: [{id: 2, title: 'Task 3',}]},
            {id: 2, title: 'Done', cards: [{id: 3, title: 'Task 4',}]},
        ] as List[],
        nextCardId: 4,
    },
    mutations: {
        ADD_NEW_CARD_TO_LIST(state, payload: Card) {
            state.lists.find(list => {
                if (list.id === payload.listId) {
                    list.cards.push(payload)
                }
            })
        },
        ADD_NEW_LIST:(state, payload: List) => state.lists.push(payload),
        INCREMENT_CARD_ID:(state) => state.nextCardId++,
    },
    actions: {},
    getters: {
        LISTS:(state): Array<object> => state.lists,
        NEXT_CARD_ID:(state): Number => state.nextCardId,
    },
    modules: {},
});
