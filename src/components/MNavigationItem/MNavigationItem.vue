<template>
  <div
    :class="[
      'list-item',
      { active: isActive }
    ]"
    @click="activate">
    {{ caption }}
  </div>
</template>

<script>
export default {
  name: 'MNavigationItem',

  props: {
    /**
     * Active state of menu item
     */
    active: {
      type: Boolean,
      default: false
    },

    /**
     * @ignore
     */
    activeUid: {
      type: Number,
      default: -1
    },

    /**
     * Caption of menu item
     */
    caption: {
      type: String,
      default: ''
    },

    /**
     * Name of the icon to use
     */
    icon: {
      type: String,
      default: ''
    }
  },

  inject: {
    _activate: {
      from: 'activate',
      default: () => {}
    }
  },

  data () {
    return {
      isActive: false
    }
  },

  watch: {
    active (val) {
      this.isActive = val
    },

    activeUid (uid) {
      this.isActive = this._uid === uid
    }
  },

  created () {
    // this.dispatcher.$on('activated', this.deactivate)
  },

  methods: {
    activate () {
      this.isActive = true
      this._activate(this)
      // console.log(this.dispatcher)
      // if (this.dispatcher) this.dispatcher.$emit('activate', this)
    }
  },
}
</script>

<style scoped lang="postcss">
.m-item {
  cursor: default;
  user-select: none;
}

.active {
  background: #ddd;
  outline: 1px solid green;
}

.m-caption {
  box-sizing: border-box;
  color: rgb(117, 117, 117);
  display: block;
  height: 40px;
  white-space: nowrap;
}
/**/
</style>

<docs></docs>
