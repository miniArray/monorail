<template>
  <m-list-item @click.native="goBack">
    <slot />
  </m-list-item>
</template>

<style scoped>

</style>

<script>
export default {
  name: 'MBackButton',

  props: {
    /**
     * Caption of group
     */
    caption: {
      type: String,
      default: ''
    },
  },
  methods: {
    goBack () {
      if (window.history.state)
        this.$router.go(-1)
    }
  }
}
</script>

<docs>
```vue
<template>
  <m-back-button />
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
```
</docs>