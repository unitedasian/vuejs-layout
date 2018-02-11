<template>
  <button @click="toggle" class="toggle">
    <i :class="icon"></i>
  </button>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      sidebar: '$_layout/sidebar'
    }),

    icon () {
      return this.sidebarCollapsed
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

<style lang="scss" scoped>
.toggle {
  background-color: #fff;
  border: none;
  height: 100%;
  left: 0;
  padding: 0 0.5rem;
  position: absolute;
  top: 350px;

  img {
    height: 100%;
    object-fit: contain;
  }
}

@media (min-width: 768px) {
  .toggle {
    left: 181px;
    top: 0;
  }
}
</style>