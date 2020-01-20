import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        reduce(state){
            state.count--;
        },
        incrementN(state, n){
            state.count +=n;
        },
        incrementObj(state, obj){
            state.count += obj.amount;
        }
    },
    actions: {},
    modules: {}
})
