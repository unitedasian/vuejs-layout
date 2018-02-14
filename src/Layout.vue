<template>
  <component
    :app_version="app_version"
    :enableSidebar="enableSidebar"
    :is="layout">
    <template slot="_logo">
      <slot name="logo" />
    </template>
    <template slot="_nav-right">
      <slot name="nav-right" />
    </template>
    <template slot="_sidebar">
      <slot name="sidebar" />
    </template>
    <template slot="_footer">
      <slot name="footer" />
    </template>
  </component>
</template>

<script>
import store from './_store'
import Flex from './_components/Flex'

export default {
  name: 'Layout',

  components: {
    Flex
  },

  created () {
    this.$store.registerModule('$_layout', store)
  },

  props: ['app_version', 'enableSidebar', 'layout']
}
</script>
