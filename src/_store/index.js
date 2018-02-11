import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  sidebar: localStorage.getItem('uam.layout.sidebar') ? localStorage.getItem('uam.layout.sidebar') : 'expanded'
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
