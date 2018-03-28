<template>
  <div class="m-list-item">
    <div class="m-list-item__icon">{{ icon }}</div>
    <div class="m-list-item__caption">{{ caption }}</div>
  </div>
</template>

<style scoped lang="postcss">
.m-list-item {
  display: flex;
  width: 100%;
  align-items: center;
  height: 48px;

  &__icon {
    flex: 1;
    width: 48px;
    max-width: 48px;
    text-align: center;
  }

  &__caption {
    flex: 2;
  }
}
</style>

<script>
export default {
  name: 'MListItem',

  props: {
    /**
     * Caption of menu item
     */
    caption: {
      type: String,
      default: ''
    },

    /**
     * Name of the icon to use
     */
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<docs>
```js
<div>
  <m-list-item icon="🍒" caption="Cherries" />
  <m-list-item icon="🍱" caption="Bento Box" />
  <m-list-item icon="🥑" caption="Avocado" />
  <m-list-item icon="🍰" caption="Cake" />
</div>
```
</docs>