<template>
  <component
    :appVersion="appVersion"
    :enableSidebar="enableSidebar"
    :enableSidebarToggle="enableSidebarToggle"
    :flatten="flatten"
    :is="layout">
    <template slot="_footer">
      <slot name="footer" />
    </template>
    <template slot="_logo">
      <slot name="logo" />
    </template>
    <template slot="_main">
      <slot name="main">
        <router-view />
      </slot>
    </template>
    <template slot="_nav-center">
      <slot name="nav-center" />
    </template>
    <template slot="_nav-right">
      <slot name="nav-right" />
    </template>
    <template slot="_sidebar">
      <slot name="sidebar" />
    </template>
  </component>
</template>

<script>
import store from './store'
import Flex from './components/Flex'

export default {
  name: 'Layout',

  components: {
    Flex
  },

  created () {
    this.$store.registerModule('$_layout', store)
  },

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
    },
    layout: {
      default: () => Flex
    }
  }
}
</script>
