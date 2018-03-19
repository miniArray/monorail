<template>
  <div>
    <div class="m-title">{{ caption }}</div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MNavigationGroup',

  props: {
    /**
     * Caption of group
     */
    caption: {
      type: String,
      default: ''
    },
  }
}
</script>

<style scoped lang="postcss">
.m-title {
  display: block;
  float: none;
  position: relative;
  cursor: pointer;
  background-color: inherit;
  height: 40px;
  font-size: 12px;
  line-height: 40px;
  color: hsl(0, 0%, 45.9%);
  border-bottom: 1px solid hsl(0, 0%, 84.7%);
  font-weight: 600;
  pointer-events: none;
  margin: 9px 18px;
}
</style>

<docs>
```js
<div class='navview'>
  <div class='navview-menu'>
    <m-navigation-item icon="mif-home" caption="Home" />
    <m-navigation-group caption="Group Caption">
      <m-navigation-item icon="mif-gamepad" caption="Games" :active="true" />
      <m-navigation-item icon="mif-apps" caption="Apps" :active="false" />
    </m-navigation-group>
    <m-navigation-group caption="Group Caption">
      <m-navigation-item icon="mif-home" caption="Home" />
      <m-navigation-item icon="mif-gamepad" caption="Games" :active="false" />
      <m-navigation-item icon="mif-apps" caption="Apps" :active="false" />
    </m-navigation-group>
  </div>
</div>
```
</docs>