<template>
  <div class="version">
    {{ version }}
  </div>
</template>

<script>
export default {
  computed: {
    version () {
      return process.env.APP_VERSION
    }
  }
}
</script>

<style lang="scss" scoped>
.version {
  font-size: 0.65rem;
}
</style>
