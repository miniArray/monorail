<template>
  <div
    :class="[
      'navview',
      'expanded-fs', {
        compacted: compact
    }]
    ">
    <div :class="['navview-pane']">
      <button
        class="pull-button"
        @click="toggle()">
        <span class="default-icon-menu" />
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
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
      default: 600,
    }
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },

  mounted () {
    window.addEventListener('resize', this.onResize)
  },

  methods: {
    onResize ({ target }) {
      if (target.window.innerWidth <= this.compactAt && !this.compact)
        this['update:compact'](true)
      else if (target.window.innerWidth >= this.compactAt && this.compact)
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
     * @type {boolean}
     */
    ['update:compact'] (bool) {
      this.$emit('update:compact', bool)
    }
  }
}
</script>

<docs>
```vue
<template>
  <div style='height: 100px;'>
    <MNavigation :compact.sync="compact" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        compact: false
      }
    }
  }
</script>
```
</docs>