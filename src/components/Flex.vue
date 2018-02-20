<template>
  <div
    :class="enableSidebar ? sidebar : ''"
    class="flex">
    <Topnav :enableSidebarToggle="enableSidebar">
      <template slot="__logo">
        <slot name="_logo" />
      </template>
      <template slot="__nav-right">
        <slot name="_nav-right" />
      </template>
    </Topnav>

    <section class="body">
      <aside v-if="enableSidebar">
        <affix
          :offset="{ top: 76, bottom: -100 }"
          relative-element-selector="#main">
          <slot name="_sidebar">
            <pre>Sidebar goes here</pre>
          </slot>
        </affix>
      </aside>

      <main id="main">
        <router-view></router-view>
      </main>
    </section>

    <footer>
      <slot name="_footer">
        <Version :app_version="app_version" />
      </slot>
    </footer>
  </div>
</template>

<script>
import Topnav from './Topnav'
import Version from './Version'

export default {
  components: {
    Topnav,
    Version
  },

  computed: {
    sidebar () {
      return this.$store.getters['$_layout/sidebar']
    }
  },

  props: ['app_version', 'enableSidebar']
}
</script>
