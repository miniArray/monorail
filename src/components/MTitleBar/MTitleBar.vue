<template>
  <div class="m-window-caption">
    <div class="m-button m-button--back m-item">➔</div>
    <div class="m-title m-item ">{{ caption }}</div>
    <div class="m-button m-button--min m-item m-item--end">🗕</div>
    <div class="m-button m-button--max m-item m-item--end">🗖</div>
    <div class="m-button m-button--close m-item m-item--end">×</div>
  </div>
</template>

<script>
export default {
  name: 'MTitleBar',

  props: {
    /**
     * Caption of group
     */
    caption: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="postcss">
.m-title__end {
  height: 100%;
  margin-left: auto;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
}

.m-button {
  flex-basis: 40px;
  width: 2rem;
  text-align: center;
  font-size: 1rem;
  font-weight: normal;
  outline: none;
  cursor: default;
  display: block;
  color: hsl(0, 0%, 100%);

  &:hover {
    background-color: hsla(0, 0%, 100%, 0.1);
    color: hsl(0, 0%, 100%);
  }

  &:before {
    border-color: hsl(0, 0%, 100%);
    color: hsl(0, 0%, 100%);
  }

  &:active {
    background-color: hsla(0, 0%, 100%, 0.3);
    color: hsl(0, 0%, 100%);
  }

  &--back {
    transform: rotate(180deg);
  }

  &--close {
    &:hover {
      background-color: hsl(0, 51.4%, 54.7%);
    }

    &:active {
      background-color: hsl(0, 71.6%, 57.1%);
    }
  }
}

.m-title {
  font-size: 0.875rem;
  color: white;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: calc(0.3125rem * 2);
}

.m-window-caption {
  display: flex;
  height: 40px;
  background: hsl(200.1, 33.4%, 35.3%);
}

.m-item {
  cursor: pointer;
  transition: 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.m-button--min {
  padding-bottom: 0.5rem;
}

.m-item--end {
  margin-left: auto;
}

.m-item--end ~ .m-item--end {
  margin-left: unset;
}
</style>

<docs>
```js
<m-title-bar caption="Title" />
```
</docs>
