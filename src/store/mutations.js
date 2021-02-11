import { NoEmitOnErrorsPlugin } from 'webpack'
import * as types from './mutation-types'

export default {
    [types.AUTH_LOGIN] (statem payload) {
        throw nwe Error('AUTH_LOGN mutation should be implemented')
    },

    [types.FETCH_ALL_TASKLIST] (state, payload) {
        throw new Error('FETCH_ALL_TASKLIST mutation shuould be implemented')
    },

    [types.ADD_TASK] (state, payload) {
        throw new Error('ADD_TASK mutation shuould be implemented')
    },

    [types.UPDATE_TASK] (state, payload) {
        throw new Error('UPDATE_TASK mutation shuould be implemented')
    },

    [types.REMOVE_TASK] (state, payload) {
        throw new Error('REMOVE_TASK mutation shuould be implemented')
    },

    [types.AUTH_LOGOUT] (state) {
        throw new Error('AUTH_LOGOUT mutation shuould be implemented')
    }
}