<template>
  <div
    :class="['navview', 'expanded-fs', {
      compacted: compact
    }]
    ">
    <div
      ref="pane"
      :class="['navview-pane']">
      <button
        class="pull-button"
        @click="toggle()">
        <span class="default-icon-menu" />
      </button>
      <!-- @slot Use this slot list -->
      <slot name="list" />
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
let ro

export default {
  name: 'MNavigation',

  props: {
    /**
		 * compact state of the panel
		 */
    compact: {
      type: Boolean,
      default: false,
    },

    /**
		 * Auto compact at this browser width
		 */
    compactAt: {
      type: Number,
      default: 1200,
    }
  },

  data () {
    return {
      animating: false
    }
  },

  beforeDestroy () {
    ro.disconnect()
  },

  mounted () {
    // const { pane } = this.$refs

    // pane.addEventListener('transitionend', () => this.animating = false, false);

    ro = new ResizeObserver(entries => this.onResize(entries[0].contentRect))
    ro.observe(document.querySelector('body'))
  },

  methods: {
    onResize (rect) {
      if (rect.width <= this.compactAt && !this.compact)
        this['update:compact'](true)
      else if (rect.width >= this.compactAt && this.compact)
        this['update:compact'](false)
    },

    /**
     * Toggle compact state
     */
    toggle () {
      this['update:compact'](!this.compact)
    },

    /**
     * Compact change event
     * @event update:compact
     * @type {Boolean}
     */
    ['update:compact'] (bool) {
      this.animating = true
      this.$emit('update:compact', bool)
    }
  }
}
</script>

<docs>
### Basic

```vue
<template>
  <div style='height: 100px;'>
    <m-navigation :compact.sync="compact" />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        compact: false
      }
    }
  }
</script>
```

### With menu

```vue
<template>
  <div style='height: 300px;'>
    <m-navigation :compact.sync="compact">
      <ul slot="list" class="navview-menu">
        <m-navigation-item icon="mif-home" caption="Home" />
        <m-navigation-item icon="mif-gamepad" caption="Games" :active="true" />
        <m-navigation-item icon="mif-apps" caption="Apps" :active="false" />
      </ul>
    </m-navigation>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        compact: false
      }
    }
  }
</script>
```
</docs>