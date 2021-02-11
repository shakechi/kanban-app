import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    auth: {
        token: null,
        userId: null
    },
    board: {
        lists: []
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    // mutation以外でのstore変更を検知
    // ただし、本番環境ではコストが高いので禁止
    // https://vuex.vuejs.org/ja/guide/strict.html
    strict: process.env.NODE_ENV !== 'production'
})