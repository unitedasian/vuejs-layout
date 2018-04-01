<template lang="html">
  <nav class="nav-top">
    <SidebarToggle v-if="enableSidebarToggle" />
    <nav class="nav-brand">
      <slot name="__logo">LOGO</slot>
    </nav>
    <div class="navbar-collapse collapse" :class="css">
      <nav class="nav-center">
        <slot name="nav-center" />
      </nav>
      <nav class="nav-right">
        <slot name="__nav-right">
        </slot>
      </nav>
    </div>
    <button
      @click="toggleNav"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      class="navbar-toggler"
      data-toggle="collapse"
      data-target="#__nav"
      type="button">
      <i class="fa fa-ellipsis-v"></i>
    </button>
  </nav>
</template>

<script>
import SidebarToggle from './SidebarToggle'

export default {
  components: {
    SidebarToggle
  },

  computed: {
    css () {
      let classes = this.collapsed ? [] : [ 'show' ]

      if (this.flatten) {
        classes.push('flatten')
      }

      return classes.join(' ')
    }
  },

  data () {
    return {
      collapsed: true
    }
  },

  methods: {
    toggleNav () {
      this.collapsed = !this.collapsed
    }
  },

  props: {
    enableSidebarToggle: {
      type: Boolean,
      default: true
    },
    flatten: {
      type: Boolean,
      default: true
    }
  }
}
</script>

