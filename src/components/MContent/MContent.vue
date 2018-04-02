<template>
  <div
    :class="['content', {
      fluid,
      'justify-center': justifyCenter,
      'align-center': alignCenter,
      'fill-height': fillHeight
    }]"
  >
    <slot />
  </div>
</template>

<style scoped lang="postcss">
.content {
  padding: var(--m-base-padding)
}
</style>

<script>
import flex from '../../mixins/flex'

export default {
  name: 'MContent',
  mixins: [flex]
}
</script>

<docs>
```js
<m-content>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, aut eveniet tempora dolore modi officia distinctio rerum, deserunt aspernatur molestias possimus similique itaque ipsa ad, assumenda blanditiis labore hic maiores.
</m-content>
```
</docs>