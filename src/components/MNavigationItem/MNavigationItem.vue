<template>
  <div
    :class="[
      'm-list-item',
      { active: isActive }
    ]"
    :style="containerStyle"
    @mousedown="down = true"
    @mouseup="down = false"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    @click="activate">
    <div class="m-list-item__icon">{{ icon }}</div>
    <div class="m-list-item__caption">{{ caption }}</div>
  </div>
</template>

<script>
import MListItem from '../MListItem'

export default {
  name: 'MNavigationItem',
  extends: MListItem,
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
  },

  inject: {
    _activate: {
      from: 'activate',
      default: () => {}
    }
  },

  data () {
    return {
      down: false,
      hover: false,
      isActive: false
    }
  },

  computed: {
    containerStyle () {
      const backgroundColor = this.down
        ? this.$monorail.settings.colors.navigationItemActive
        : this.hover
          ? this.$monorail.settings.colors.navigationItemHover
          : 'inherit'

      return {
        backgroundColor
      }
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

  methods: {
    activate () {
      this.isActive = true
      this._activate(this)
    }
  }
}
</script>