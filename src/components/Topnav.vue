<template lang="html">
  <header class="topnav">
    <nav class="nav-left">
      <slot name="__logo">LOGO</slot>
      <SidebarToggle v-if="enableSidebarToggle" />
    </nav>
    <nav class="nav-center">
      <slot name="nav-center" />
    </nav>
    <nav class="nav-right">
      <slot name="__nav-right">
      </slot>
    </nav>
  </header>
</template>

<script>
import SidebarToggle from './SidebarToggle'

export default {
  components: {
    SidebarToggle
  },

  props: ['enableSidebarToggle']
}
</script>
