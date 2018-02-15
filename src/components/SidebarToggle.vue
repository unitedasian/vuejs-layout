<template>
  <button @click="toggle" class="toggle">
    <i :class="icon"></i>
  </button>
</template>

<script>
export default {
  computed: {
    sidebar () {
      return this.$store.getters['$_layout/sidebar']
    },

    icon () {
      return this.sidebar === 'collapsed'
        ? 'fa fa-angle-double-right'
        : 'fa fa-angle-double-left'
    }
  },

  methods: {
    toggle () {
      this.$store.dispatch('$_layout/toggleSidebar')
    }
  }
}
</script>
