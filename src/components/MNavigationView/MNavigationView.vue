<template lang="pug">
extends ../MSplitView/MSplitView.pug

block slotPane
  div(style="background: #eee")
    button.pull-button(:style='buttonStyle', @click='toggle')
      span.default-icon-menu
    m-navigation(v-model='value', :collapsed='collapsed')

block slotContent
  // @slot Content slot
  slot
</template>

<script>
import SplitView from '../MSplitView'
import MNavigation from '../MNavigation'

export default {
  name: 'MNavigationView',

  components: {
    MNavigation
  },

  extends: SplitView,

  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    },

    backgroundColor: {
      type: String,
      default: '#ccc'
    }
  },

  computed: {
    buttonStyle () {
      return {
        width: this.$monorail.settings.listItemIcon + 'px',
        height: this.$monorail.settings.listItemIcon + 'px',
        border: 'none',
        outline: 'none',
        background: 'none'
      }
    }
  },

  methods: {
    toggle () {
      this['update:collapsed'](!this.collapsed)
    }
  }
}
</script>

<docs>
## Inline

```vue
<template>
  <div>
    <m-navigation-view
      :collapsed.sync="collapsed"
      mode="compact-inline"
      v-model="items"
      backgroundColor="#eee"
      style="min-height: 100px">
        <m-content>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, aut eveniet tempora dolore modi officia distinctio rerum, deserunt aspernatur molestias possimus similique itaque ipsa ad, assumenda blanditiis labore hic maiores.
        </m-content>
    </m-navigation-view>
  </div>
</template>

<script>
const { items } = require('../../fixtures/navigation').default

export default {
  data () {
    return {
      collapsed: true,
      items
    }
  }
}
</script>
```

## Overlay

```vue
<template>
  <div>
    <m-navigation-view
      :collapsed.sync="collapsed"
      mode="compact-overlay"
      v-model="items"
      backgroundColor="#eee"
      style="min-height: 100px">
        <m-content>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, aut eveniet tempora dolore modi officia distinctio rerum, deserunt aspernatur molestias possimus similique itaque ipsa ad, assumenda blanditiis labore hic maiores.
        </m-content>
    </m-navigation-view>
  </div>
</template>

<script>
const { items } = require('../../fixtures/navigation').default

export default {
  data () {
    return {
      collapsed: true,
      items
    }
  }
}
</script>
```
</docs>