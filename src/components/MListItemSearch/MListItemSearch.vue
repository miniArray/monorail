<template>
  <div>
    <div
      v-if="collapsed"
      class="input-container">
      <input
        type="text"
        placeholder="Search">
    </div>
    <m-list-item v-else>
      <img src="../../../assets/search.svg">
    </m-list-item>
  </div>
</template>

<style scoped>
.input-container {
  height: 48px;
  padding: 8px 16px;
  box-sizing: border-box;
}

input {
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  box-sizing: border-box;
  padding: 8px;
  outline: none;
}
</style>

<script>
import collapsable from '../../mixins/collapsable'

export default {
  name: 'MListItemSearch',
  mixins: [collapsable],
  props: {

  }
}
</script>

<docs>
```vue
<template>
  <m-list-item-search />
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