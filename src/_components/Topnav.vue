<template lang="html">
  <nav class="topnav">
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
  </nav>
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

<style lang="scss" scoped>
@import "../../../assets/scss/_vars";

.topnav {
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .logo {
    margin-top: 0.5rem;
  }

  .nav-center {
    align-items: flex-start;
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .v-select {
      .dropdown-toggle {
        border: none;
      }

      .open-indicator {
        height: 2rem;
        width: 2rem;

        &:before {
          border: none;
          color: #9295a4;
          content: "\f002";
          font-family: FontAwesome;
          font-size: 1.5rem;
          font-style: normal;
          font-weight: normal;
          text-decoration: inherit;
          transform: rotate(0)!important;
        }
      }

      &.open {
        .open-indicator {
          bottom: 6px;

          &:before {
            transform: rotate(0)  ;
          }
        }
      }
    }
  }

  .nav-right {
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}

@media (min-width: 768px) {
  a.logo {
    margin-top: 1rem;
    width: $logo-width;
  }
}
</style>

