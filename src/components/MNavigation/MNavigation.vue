<template>
  <div
    :class="['navview', 'expanded-fs', {
      compacted: compact
    }]
    ">
    <div :class="['navview-pane']">
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
        <li>
          <a href="#">
            <span class="icon"><span class="mif-apps"/></span>
            <span class="caption">Apps</span>
          </a>
        </li>
        <li class="active">
          <a href="#">
            <span class="icon"><span class="mif-file-word"/></span>
            <span class="caption">Word</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon"><span class="mif-file-excel"/></span>
            <span class="caption">Excel</span>
          </a>
        </li>
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