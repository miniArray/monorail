<template>
  <div
    :style="{
      padding: '0 ' + $monorail.settings.basePadding + 'px'
  }">
    <slot />
  </div>
</template>

<style scoped lang="postcss">
.m-content {
  padding: 16px;
}
</style>

<script>
export default {
  name: 'MContent',
}
</script>

<docs>
```js
<m-content>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, aut eveniet tempora dolore modi officia distinctio rerum, deserunt aspernatur molestias possimus similique itaque ipsa ad, assumenda blanditiis labore hic maiores.
</m-content>
```
</docs>