const sidebar = state => {
  let sidebar = state.sidebar

  if (!sidebar) {
    sidebar = localStorage.getItem('uam.layout.sidebar')
  }

  if (!sidebar) {
    sidebar = 'expanded'
  }

  return sidebar
}

export default {
  sidebar
}
