<template lang="pug">
extends ../MSplitView/MSplitView.pug

block slotPane
  div(style="height: 100%; display: flex; flex-direction: column;" class="no-select")
    div(style="flex: 1;")
      m-list-item(@click.native="toggle")
        img(src="../../../assets/burger.svg" style="width: 16px")
    div(style="flex: 1;" v-if="value.start")
      m-navigation-item(v-for="(item, index) in value.start" :key="index") {{ item.icon }}

    div(style="flex: 999; overflow: scroll;")
      m-navigation(v-model='value.middle', :collapsed='collapsed')

    div(style="flex: 1;" v-if="value.end")
      m-navigation-item(v-for="(item, index) in value.end" :key="index") {{ item.icon }}

block slotContent
  // @slot Content slot
  slot
</template>

<script>
import SplitView from '../MSplitView'
import MNavigation from '../MNavigation'
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
  name: 'MNavigationView',
  store,
  components: {
    MNavigation
  },

  extends: SplitView,

  props: {
    value: {
      type: Object,
      default () {
        return {}
      }
    },

    backgroundColor: {
      type: String,
      default: '#ccc'
    }
  },

  computed: {

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
      background-color="#eee"
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