<template>
  <div class="version">
    {{ app_version }}
  </div>
</template>

<script>
export default {
  props: ['app_version']
}
</script>

<style lang="scss" scoped>
.version {
  font-size: 0.65rem;
}
</style>
