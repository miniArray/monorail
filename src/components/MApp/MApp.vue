<template>
  <div
    :style="styles"
    class="m-app">
    <slot/>
  </div>
</template>

<style scoped>
  .m-app {
    font-family: "Segoe UI";
  }
</style>

<script>
import { toCssVars } from '../../../src/utils/toolbelt/index'

export default {
  name: 'MApp',

  props: {

  },

  computed: {
    styles () {
      return toCssVars(this.$monorail.settings)
    }
  }
}
</script>

<docs>
```vue
<template>
  <m-app />
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