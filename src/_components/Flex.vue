<template>
  <div
    :class="enableSidebar ? sidebar : ''"
    class="flex">
    <header>
      <Topnav :enableSidebarToggle="enableSidebar">
        <template slot="__logo">
          <slot name="_logo" />
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
        <router-view></router-view>
      </main>
    </section>

    <footer>
      <slot name="_footer">
        <Version />
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

  props: ['enableSidebar']
}
</script>

<style lang="scss">
@import "../_scss/_vars";

.flex {
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  padding-top: 68px;

  > .body {
    align-items: stretch;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;

    > aside {
      align-items: center;
      border-right: 1px solid $border-color;
      display: none;
      flex-direction: column;
      justify-content: space-between;
      padding-top: 2.5rem;
      position: relative;
      width: $sidebar-width;

      .vue-affix {
        width: $sidebar-width;

        &.affix {
          top: 111px!important;
        }

        .sidebar {
          flex: 1;
        }
      }
    }

    > main {
      background-color: $bg-content-color;
      flex: 1;
      padding: 1.25rem $padding-h;

      > section {
        align-content: stretch;
        align-items: stretch;
        display: flex;
        flex-direction: column;
        height: 100%;

        .content {
          background-color: #fff;
          border: 1px solid $content-border-color;
          flex: 1;
          padding: 1rem 1.5rem;

          .tabs {
            margin: 0 -1.5rem;
          }
        }
      }
    }
  }

  footer {
    background-color: $bg-color;
    border-top: 1px solid $border-color;
    padding: 0.75rem 2.5rem;
  }

  header {
    background-color: $bg-color;
    border-bottom: 1px solid $border-color;
    left: 0;
    padding: 0.75rem 2.5rem;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1030;
  }
}

@media (min-width: 768px) {
  .flex {
    padding-top: 4rem;

    footer {
      padding: 0.75rem $padding-h;
    }

    header {
      height: 4rem;
      padding: 0.75rem $padding-h;
    }

    > .body {
      > main {
        padding: 1.25rem $padding-h;
      }
    }

    &.collapsed {
      > .body {
        > aside {
          display: none;
        }

        > main {
          padding-left: $padding-h;
        }
      }
    }

    &.expanded {
      > .body {
        > aside {
          display: flex;
        }

        > main {
          padding-left: 1.25rem;
        }
      }
    }
  }
}
</style>
