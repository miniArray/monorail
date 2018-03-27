<template>
  <div>
    <div
      ref="indicator"
      :style="indicatorStyles"
      class="indicator" />
    <m-navigation-group
      v-for="(group, index) in value"
      :key="index"
      :active-uid="active"
      v-model="value[index]" />
  </div>
</template>

<style scoped>
.indicator {
  width: 5px;
  background-color: blue;
  position: absolute;
  transition: top .15s ease-in-out;
  z-index: 1;
}
</style>

<script>
const px = num => `${num}px`

export default {
  name: 'MNavigationView',

  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    }
  },

  provide () {
    return {
      activate: this.activate
    }
  },

  data () {
    return {
      active: null,
      indicator: {
        height: 0,
        top: 0
      }
    }
  },

  computed: {
    indicatorStyles () {
      return {
        height: px(this.indicator.height),
        top: px(this.indicator.top)
      }
    }
  },

  created () {
    // _dispatcher.$on('activate', this.activate)
  },

  mounted () {
    const firstItem = this.$children[0].$children[0]
    firstItem.isActive = true
    this.activate(firstItem)
  },

  methods: {
    activate ($component) {
      const fromGrandparent = $component.$el.offsetTop + $component.$parent.$el.offsetTop
      const size = .7
      this.active = $component._uid
      this.indicator.height = $component.$el.offsetHeight * size
      this.indicator.top = fromGrandparent + ($component.$el.offsetHeight * (1 - size) / 2)
      // _dispatcher.$emit('activated', this.active)
    }
  }
}
</script>

<docs>
```vue
<template>
  <m-navigation-view v-model="items" />
</template>

<script>
export default {
  data () {
    return {
      items: [{
        caption: "heading 1",
        items: [{
          id: 0,
          caption: "item 1"
        }, {
          id: 1,
          caption: "item 2"
        }]
      }, {
        caption: "heading 2",
        items: [{
          id: 2,
          caption: "another item 1"
        }, {
          id: 3,
          caption: "other item 2"
        }]
      }]
    }
  }
}
</script>

```
</docs>