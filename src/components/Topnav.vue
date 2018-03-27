<template lang="html">
  <nav class="nav-top">
    <SidebarToggle v-if="enableSidebarToggle" />
    <nav class="nav-brand">
      <slot name="__logo">LOGO</slot>
    </nav>
    <div class="navbar-collapse collapse" id="__nav"
      <nav class="nav-center">
        <slot name="nav-center" />
      </nav>
      <nav class="nav-right">
        <slot name="__nav-right">
        </slot>
      </nav>
    </div>
    <button
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      class="navbar-toggler"
      data-toggle="collapse"
      data-target="#__nav"
      type="button">
      <icon name="ellipsis" />
    </button>
  </nav>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'
import SidebarToggle from './SidebarToggle'
import 'vue-awesome/icons/ellipsis'

export default {
  components: {
    Icon,
    SidebarToggle
  },

  props: ['enableSidebarToggle']
}
</script>
