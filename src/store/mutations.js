import * as types from './mutation-types'

export const mutations = {
  [types.GET_USER] (state, count_payload) {
    state.user = count_payload
  },
  [types.GET_COUNT] (state, count_payload) {
    state.counts = count_payload
  },
  [types.INC_COUNT] (state, count_payload) {
    state.counts.count = count_payload
  },
  [types.SIGN_OUT] (state) {
    state.user = {}
  }
}
