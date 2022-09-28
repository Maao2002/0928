import { createStore } from "vuex"
let store = createStore({
    state: {
        count: 1
    },
    getters: {},
    mutations: {
        increment(state) {
            state.count += 3
        }
    },
    actions: {}
})
export default store