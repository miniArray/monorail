<template>
  <div
    class="no-select"
    style="background: #eee; height: 100%; display: flex; flex-direction: column;">
    <!-- @wheel="onScroll"> -->
    <div style="flex: 1;">
      <slot name="start" />
    </div>
    <div style="flex: 999; overflow: scroll;">
      <slot />
      <slot name="middle" />
    </div>
    <div style="flex: 1;">
      <slot name="end" />
    </div>
    <!-- <div
      ref="indicator"
      :style="indicatorStyles"
      class="indicator" /> -->
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
import collapsable from '../../mixins/collapsable'
import MNavigationGroup from '../MNavigationGroup'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    active: null
  },
  mutations: {
    active (state, active) {
      state.active = active
    }
  }
})

export default {
  name: 'MNavigation',

  store,

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

  // provide () {
  //   return {
  //     activate: this.activate
  //   }
  // },

  data () {
    return {
      active: null,
      // indicator: {
      //   size: .7,
      //   transitionDuration: 150,
      //   styles: {
      //     transitionDuration: 0,
      //     height: 0,
      //     top: 0
      //   }
      // }
    }
  },

  computed: {
    indicatorStyles () {
      // console.log(this.indicator.styles.transitionDuration)

      return {
        // height: px(this.indicator.styles.height),
        // top: px(this.indicator.styles.top),
        // backgroundColor: this.$monorail.settings.colors.baseHighColor,
        // transitionDuration: this.indicator.styles.transitionDuration
      }
    }
  },

  watch: {
    collapsed () {
      // requestAnimationFrame(() => this.activate(this.active))
    }
  },

  mounted () {
    // const firstItem = this.$children[0].$children[0]
    // this.activate(firstItem)
  },

  methods: {
    // onScroll (event) {
    //   this.moveIndicator(false)
    // },

    moveIndicator () {
      // if (!animate) this.indicator.styles.transitionDuration = '0s'

      // this.indicator.styles.top = this.active.$el.offsetTop
      //   - this.$refs.xxx.parentNode.scrollTop
      //   + (this.active.$el.offsetHeight * (1 - this.indicator.size) / 2)

      // if (!animate) {
      //   requestAnimationFrame(() => {
      //     this.indicator.styles.transitionDuration = this.indicator.transitionDuration + 'ms'
      //   })
      // }
    },

    activate () {
      // this.active = $component
      // if (this.$router && this.active.to) this.$router.push(this.active.to)
      // this.indicator.styles.height = this.active.$el.offsetHeight * this.indicator.size
      // this.moveIndicator()
    }
  },
}
</script>

<docs>
```js
<m-navigation v-model="items" style="background-color: #eee" />
```
</docs>