<template>
  <div>
    <div
      ref="indicator"
      :style="indicatorStyles"
      class="indicator" />
    <m-navigation-group
      v-for="(group, index) in value"
      :key="index"
      :collapsed="collapsed"
      :active-uid="active ? active._uid : -1"
      v-model="value[index]" />
  </div>
</template>

<style scoped>
.indicator {
  width: 5px;
  position: absolute;
  transition: top 150ms ease-in-out;
  z-index: 1;
}
</style>

<script>
const px = num => `${num}px`
import collapsable from '../../mixins/collapsable'
import MNavigationGroup from '../MNavigationGroup'

export default {
  name: 'MNavigation',

  components: {
    MNavigationGroup
  },

  mixins: [
    collapsable
  ],

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
        top: px(this.indicator.top),
        backgroundColor: this.$monorail.settings.colors.baseHighColor,
        transitionDuration: this.indicator.transitionDuration
      }
    }
  },

  watch: {
    collapsed () {
      this.indicator.transitionDuration = 0 + 's'
      requestAnimationFrame(() => this.activate(this.active))
      requestAnimationFrame(() => this.indicator.transitionDuration = 150 + 'ms')
    }
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
      this.active = $component
      this.indicator.height = $component.$el.offsetHeight * size
      this.indicator.top = fromGrandparent + ($component.$el.offsetHeight * (1 - size) / 2)
    }
  },
}
</script>

<docs>
```vue
<template>
  <m-navigation v-model="items" style="background-color: #eee" />
</template>

<script>

export default {
  data () {
    return {
      items: [{
        caption: "Fruit",
        items: [{
          icon: '🍒',
          caption: "Cherries"
        }, {
          icon: '🍈',
          caption: "Melons"
        }, {
          icon: '🍓',
          caption: "Strawberries"
        }, {
          icon: '🍊',
          caption: "Tangerines"
        }, {
          icon: '🥝',
          caption: "Kiwis"
        }, {
          icon: '🍇',
          caption: "Grapes"
        }]
      }, {
        caption: "Veggies",
        items: [{
          icon: '🍅',
          caption: "Tomatoes"
        }, {
          icon: '🍆',
          caption: "Melons"
        }, {
          icon: '🥕',
          caption: "Carrots"
        }, {
          icon: '🥒',
          caption: "Cucumbers"
        }]
      }]
    }
  }
}
</script>
```
</docs>