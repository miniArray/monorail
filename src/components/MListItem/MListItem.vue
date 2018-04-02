<template lang="pug">
include ./MListItem.mixin.pug

+MListItem
</template>

<style scoped lang="postcss">
.m-list-item {
  display: flex;
  width: 100%;
  align-items: center;
  height: var(--m-list-item-height);
  position: relative;

  &__icon {
    flex: 1;
    width: var(--m-list-item-height);
    max-width: var(--m-list-item-height);
    height: var(--m-list-item-icon);
    max-height: var(--m-list-item-icon);
    text-align: center;

    > * {
      height: 100%
    }
  }

  &__caption {
    flex: 2;
    height: var(--m-list-item-icon);
  }

  &:hover {
    background-color: var(--m-colors--navigation-item-hover);
  }

  &.active {
    &::before {
      content: '';
      width: 5px;
      position: absolute;
      height: 100%;
      background-color: var(--m-colors--base-high-color);
    }
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
  },

  mounted () {

  },
}
</script>

<docs>
```js
<div>
  <m-list-item caption="Cherries">🍒</m-list-item>
  <m-list-item caption="Bento Box">🍱</m-list-item>
  <m-list-item caption="Avocado">🥑</m-list-item>
  <m-list-item caption="Cake" />🍰</m-list-item>
</div>
```
</docs>