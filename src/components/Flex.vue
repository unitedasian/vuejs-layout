<template>
  <div
    :class="enableSidebar ? sidebar : ''"
    class="flex">
    <header>
      <Topnav
        :enableSidebarToggle="enableSidebarToggle"
        :flatten="flatten">
        <template slot="__logo">
          <slot name="_logo" />
        </template>
        <template slot="__nav-center">
          <slot name="_nav-center" />
        </template>
        <template slot="__nav-right">
          <slot name="_nav-right" />
        </template>
      </Topnav>
    </header>
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
        <slot name="_main" />
      </main>
    </section>

    <footer>
      <slot name="_footer">
        <Version :appVersion="appVersion" />
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

  name: 'Flex',

  props: {
    appVersion: {
    },
    enableSidebar: {
      default: true
    },
    enableSidebarToggle: {
      default: true
    },
    flatten: {
      default: true
    }
  }
}
</script>
