<template>
  <div
    :class="['charms', positionClass, { open }]"
    :style="[alignment]"
    data-role="charms">
    <!-- @slot Slot for charm content -->
    <slot />
  </div>
</template>

<script>
import R from '../../utils/toolbelt'

const positions = [
  'top',
  'right',
  'bottom',
  'left'
]

const alignments = [
  'center',
  'start',
  'end'
]

export default {
  name: 'MCharm',

  props: {
    /**
     * Position of charm
     */
    position: {
      type: String,
      default: 'bottom',
      validator: val => R.inList(positions, val)
    },

    /**
     * Where to align the content
     */
    align: {
      type: String,
      default: 'start',
      validator: val => R.inList(alignments, val)
    },

    /**
     * Open state of charm
     */
    open: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    positionClass () {
      return R.appendStr('-side', this.position)
    },

    alignment () {
      return {
        justifyContent: R.when(
          R.inList(['start', 'end']),
          R.concat('flex-')
        )(this.align)
      }
    }
  }
}
</script>

<style scoped lang="postcss">
  [data-role="charms"] {
    background-color: hsl(0, 0%, 11.4%);
    display: flex;
    padding: 2rem;
  }

  .top-side,
  .bottom-side {
    flex-direction: row;
  }

  .left-side,
  .right-side {
    flex-direction: column;
  }
</style>

<docs>
```vue
<template>
  <div>
    <m-charm position="top" :open.sync="top" :align="align">
      content
    </m-charm>

    <m-charm position="right" :open.sync="right" :align="align">
      content
    </m-charm>

    <m-charm position="bottom" :open.sync="bottom" :align="align">
      content
    </m-charm>

    <m-charm position="left" :open.sync="left" :align="align">
      content
    </m-charm>

    <div style="text-align: center">
      <h5>Toggle</h5>
      <button @click="top = !top">Top</button>
      <button @click="right = !right">Right</button>
      <button @click="bottom = !bottom">Bottom</button>
      <button @click="left = !left">Left</button>

      <br/>
      <br/>

      <h5>Align</h5>
      <button @click="align = 'start'">Start</button>
      <button @click="align = 'center'">Center</button>
      <button @click="align = 'end'">End</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      top: false,
      right: false,
      bottom: false,
      left: false,
      align: 'center'
    }
  }
}
</script>
```
</docs>
