<template>
  <transition
    :css="false"
    name="collapse"
    @before-enter="beforeExpand"
    @enter="onExpanding"
    @before-leave="beforeCollapse"
    @leave="onCollapsing">
    <div
      v-if="!collapsed"
      class="collapse-container">
      <!-- @slot Content for transition -->
      <slot ref="child" />
    </div>
  </transition>
</template>

<style scoped lang="postcss">
  .collapse-container {
    position: relative;
  }
</style>

<script>
import Velocity from 'velocity-animate'

export default {
  name: 'MCollapsible',

  props: {
    /**
     * Direction of collapse
     * `up, left`
     */
    direction: {
      type: String,
      default: 'up',
      validator: val => val === 'up' || val === 'left'
    },

    /**
     * Duration of collapse in ms
     */
    duration: {
      type: [Object, Number],
      default: 1400
    },

    /**
     * Caption of group
     */
    collapsed: {
      type: Boolean,
      default: false
    },

    /**
     * Animation style
     * `drawer, rollup`
     */
    animation: {
      type: String,
      default: 'drawer',
      validator: val => ['drawer', 'rollup'].includes(val)
    },


    /**
     * Caption of group
     */
    caption: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      originalStyles: {}
    }
  },

  computed: {
    durationCollapse () {
      return typeof this.duration === 'number'
        ? this.duration
        : this.duration.leave
    },

    durationExpand () {
      return typeof this.duration === 'number'
        ? this.duration
        : this.duration.enter
    }
  },

  methods: {
    beforeCollapse (el) {
      this.originalStyles.height = el.offsetHeight
      this.originalStyles.width = el.offsetWidth
      this.originalStyles.overflow = el.style.overflow
      el.style.overflow = 'hidden'
    },

    onCollapsing (el, done) {

      if (this.direction === 'up') {
        Velocity(el, { height: this.originalStyles.height }, { duration: 0 })
        Velocity(el, { height: 0 }, { duration: this.durationCollapse, complete: done })
      }
      else if (this.direction === 'left') {
        Velocity(el, { width: this.originalStyles.width }, { duration: 0 })
        Velocity(el.firstChild, { width: this.originalStyles.width }, { duration: 0 })

        Velocity(el, { width: 0 }, { duration: this.durationCollapse, complete: done })
        if (this.animation === 'drawer') Velocity(el.firstChild, { translateX: -(this.originalStyles.width) }, { duration: this.durationCollapse, complete: done })

      }
    },

    afterCollapse () { },

    beforeExpand (el) {
      el.style.overflow = 'hidden'
    },

    onExpanding (el, done) {
      if (this.direction === 'up') {
        Velocity(el, { height: 0 }, { duration: 0 })
        Velocity(el, { height: this.originalStyles.height }, { duration: this.durationExpand, complete: done })
      }
      else if (this.direction === 'left') {
        Velocity(el, { width: 0 }, { duration: 0 })
        Velocity(el.firstChild, { width: this.originalStyles.width }, { duration: 0 })
        if (this.animation === 'drawer') Velocity(el.firstChild, { translateX: -(this.originalStyles.width) }, { duration: 0 })

        Velocity(el, { width: this.originalStyles.width }, { duration: this.durationExpand, complete: done })
        if (this.animation === 'drawer') Velocity(el.firstChild, { translateX: 0 }, { duration: this.durationExpand, complete: done })
      }
    },

    afterExpand (el) {
      el.style.overflow = 'visible'
    }
  }
}
</script>

<docs>
```vue
<template>
<div>
  <button @click="collapsed = !collapsed">
    Toggle transition:
  </button>

  <m-collapsible :direction="direction" :collapsed="collapsed" :duration="400">
    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quos, officia incidunt aliquam, ad suscipit, a sed itaque dicta repellendus laboriosam excepturi fugiat maiores. Mollitia reiciendis minima sapiente quaerat enim?</div>
  </m-collapsible>
</div>
</template>

<script>
export default {
  data () {
    return {
      collapsed: false,
      direction: 'left'
    }
  }
}
</script>
```
</docs>