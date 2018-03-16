<template>
  <div>
    <div class="m-title">{{ caption }}</div>
    <slot />
  </div>
</template>

<style scoped>
.m-title:first-child {
  margin: 0;
  border-top-width: 0;
}

.m-title {
  height: 40px;
  display: block;
  float: none;
  position: relative;
  cursor: pointer;
  color: inherit;
  background-color: inherit;
  height: auto;

  font-size: 12px;
  line-height: 40px;
  padding: 0 8px;
  color: #646464;
  /* border-bottom: 1px solid #646464; */
  padding-left: 18px;
  font-weight: bold;
  pointer-events: none;
}
</style>

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