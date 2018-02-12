import Layout from './Layout'
import Affix from 'vue-affix'

const Plugin = {
  /**
   * Install user plugin
   *
   * @param {Vue} Vue
   */
  install: (Vue) => {
    Vue.use(Affix)
    Vue.component('Layout', Layout)
  }
}

export default Plugin
