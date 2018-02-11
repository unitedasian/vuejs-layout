const toggleSidebar = (context) => {
  context.commit('TOGGLE_SIDEBAR')

  localStorage.setItem('uam.layout.sidebar', state.sidebar)
}

export default {
  toggleSidebar
}
