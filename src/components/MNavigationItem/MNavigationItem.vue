<template lang="pug">
include ../MListItem/MListItem.mixin.pug

+MListItem()(
  @click="activate"
  :class="['m-list-item', { active: isActive }]"
)
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

    to: {
      type: [String, Object, Number],
      default () {
        return 0
      }
    }
  },

  computed: {
    isActive () {
      return this.$route.path === this.to
    }
  },

  methods: {
    activate () {
      this.$store.commit('active', this._uid)

      if (this.$router && this.to !== 0)
        this.$router.push(this.to)
    }
  }
}
</script>