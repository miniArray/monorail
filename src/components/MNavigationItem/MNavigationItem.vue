<template>
  <li :class="['m-item', { active }]">
    <a>
      <span class="icon"><span :class="icon"/></span>
      <span class="caption">{{ caption }}</span>
    </a>
  </li>
</template>

<style scoped>
.m-item {
  cursor: default;
  user-select: none;
}

.m-caption {
  box-sizing: border-box;
  color: rgb(117, 117, 117);
  display: block;
  height: 40px;
  white-space: nowrap;
}
</style>

<script>
export default {
  name: 'MNavigationItem',

  props: {
    /**
     * Active state of menu item
     */
    active: {
      type: Boolean,
      default: false
    },

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
<div class='navview'>
  <ul class='navview-menu'>
    <m-navigation-item icon="mif-gamepad" caption="Games" :active="true" />
  </ul>
</div>
```
</docs>