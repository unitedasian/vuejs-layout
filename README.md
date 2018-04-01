# uam-vuejs-layout

## Components

### Layout

Main component. Import the component in your app's `main.js`, then include it in your app's template as the top-level component.

``` js
# main.js

import Layout from 'uam-vuejs-layout'
Vue.use(Layout)
```

``` js
# App.vue

<template>
  <Layout>
    :appVersion="version"
    :enableSidebar="isLoggedIn"
    :enableSidebarToggle="isLoggedIn">
    <Logo slot="logo" />
    <Sidebar slot="sidebar" />
    <uamUserMenu
      :divider="false"
      profile="profile"
      slot="nav-right" />
  </Layout>
</template>

<script>
import Logo from './components/Logo'
import Sidebar from './components/Sidebar'

export default {
  components: {
    Logo,
    Sidebar
  },

  computed: {
    isLoggedIn () {
      return this.$uamAuth.isLoggedIn()
    },

    version () {
      return process.env.APP_VERSION
    }
  },

  name: 'app'
</script>
```

#### Props

| prop                | type         | default  | explanation         |
|:--------------------|:-------------|:---------|:--------------------|
| appVersion | String, any | | The app version to display in the footer |
| enableSidebar | Boolean, any | true | Whether to display the sidebar  |
| enableSidebarToggle | Boolean, any |̨ true | Whether to display the sidebar toggle |
| flatten | Boolean, any | true | Whether to flatten any nav components in the top nav (dropdowns will show expanded, and the dropdown toggle will be hidden) |
|layout | String, any | Flex | The layout to use. Currently "Flex" is the only avaiable value |

### Slots

#### logo

A component to be displayed as the top nav's `nav-brand` component.

#### nav-right

A component to be displayed as the top nav's right-aligned nav. The Layout component expects this component to follow bootstrap's conventions for navs.

#### sidebar

A component to be displayed as the layout's sidebar.

### Version

Displays the app version is suitable style. By default, this is displayed in the footer.

#### Props

| prop       | type        | default | explanation         |
|:-----------|:------------|:--------|:--------------------|
| appVersion | String, any | | The app version to display in the footer |
