<template lang="pug">
extends ./MSplitView.pug
</template>

<style scoped lang="postcss">
.split-view {
  display: grid;
  grid-template-rows: auto;
  grid-gap: 0px;
}

.pane,
.content {
  align-items: center;
  justify-items: center;
}

.content,
.pane,
.pane__wrapper,
.pane__wrapper > *,
.content > * {
  height: 100%;
}

.pane {
  overflow: hidden;
  grid-column-start: 1;
  z-index: 2;
}

.content {
  grid-column: 2;
  z-index: 1;
}

</style>

<script>
import always from 'ramda/es/always'
import ifElse from 'ramda/es/ifElse'
import equals from 'ramda/es/equals'
import pipe from 'ramda/es/pipe'
import cond from 'ramda/es/cond'
import tween from 'popmotion/animations/tween'
import collapsable from '../../mixins/collapsable'

const px = num => `${num}px`
const splitViewOptions = [
  'compact-inline',
  'compact-overlay'
]

export default {
  name: 'MSplitView',

  mixins: [collapsable],

  props: {
    /**
     * Width of pane when collapsed
     */
    collapsedWidth: {
      type: Number,
      default () {
        return this.$monorail.settings.listItemIcon
      }
    },

    /**
     * Mode of pane:
     * `compact-inline, compoact-overlay`
     */
    mode: {
      type: String,
      default: 'compact-inline',
      validate: val => splitViewOptions.includes(val)
    },

    /**
     * Width of the pane when expanded
     */
    expandedWidth: {
      type: Number,
      default () {
        return this.$monorail.settings.splitViewExpandedWidth
      }
    }
  },

  data () {
    return {
      width: 0
    }
  },

  computed: {
    paneStyles () {
      return {
        gridColumnEnd: this.mode === 'compact-inline' ? 1 : 2,
        width: px(this.width)
      }
    },

    paneWrapperStyles () {
      return {
        width: px(this.expandedWidth)
      }
    },

    splitViewStyles () {
      const width = pipe(this.getColumnWidthFromMode, px)(this.mode)

      return {
        gridTemplateColumns: `${width} 1fr`
      }
    }
  },

  watch: {
    collapsed () {
      this.animatePaneWidth()
    }
  },

  created () {
    this.width = ifElse(
      always(true),
      always(this.collapsedWidth),
      always(this.expandedWidth)
    )(this.collapsed)
  },

  methods: {
    getColumnWidthFromMode (mode) {
      return cond([
        [equals('compact-overlay'), always(this.collapsedWidth)],
        [equals('compact-inline'), always(this.width)]
      ])(mode)
    },

    animatePaneWidth () {
      tween({
        from: !this.collapsed ? this.collapsedWidth : this.expandedWidth,
        to: this.collapsed ? this.collapsedWidth : this.expandedWidth,
      }).start(v => this.width = v)
    }
  },
}
</script>

<docs>
### Compact Inline mode

Content area is always visible.

```vue
<template>
  <div>
    <div>
      <m-switch :checked="!collapsed" @change="collapsed = !collapsed" caption="Expanded" />
      <br/>
      <br/>
    </div>

    <m-split-view :collapsed="collapsed" mode="compact-inline" style="min-height: 100px">
      <div style='background: #ddd' slot="pane"/>
      <div style='background: #ccc' slot="content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, aut eveniet tempora dolore modi officia distinctio rerum, deserunt aspernatur molestias possimus similique itaque ipsa ad, assumenda blanditiis labore hic maiores.
      </div>
    </m-split-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      collapsed: true,
    }
  }
}
</script>
```

### Compact Overlay mode

Content area is hidden when pane is not collapsed.

```vue
<template>
  <div>
    <div>
      <m-switch :checked="!collapsed" @change="collapsed = !collapsed" caption="Expanded" />
      <br/>
      <br/>
    </div>

    <m-split-view :collapsed="collapsed" mode="compact-overlay" style="min-height: 100px">
      <div style='background: #ddd' slot="pane"/>
      <div style='background: #ccc' slot="content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, aut eveniet tempora dolore modi officia distinctio rerum, deserunt aspernatur molestias possimus similique itaque ipsa ad, assumenda blanditiis labore hic maiores.
      </div>
    </m-split-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      collapsed: true,
    }
  }
}
</script>
```
</docs>