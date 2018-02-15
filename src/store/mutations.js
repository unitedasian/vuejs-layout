const TOGGLE_SIDEBAR = (state) => {
  state.sidebar = state.sidebar === 'collapsed' ? 'expanded' : 'collapsed'

  localStorage.setItem('uam.layout.sidebar', state.sidebar)
}

export default {
  TOGGLE_SIDEBAR
}
