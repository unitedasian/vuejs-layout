const TOGGLE_SIDEBAR = (state) => {
  state.sidebar = state.sidebar === 'collapsed' ? 'expanded' : 'collapsed'
}

export default {
  TOGGLE_SIDEBAR
}
