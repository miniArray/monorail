export default {
  props: {
    /**
     * Collapsed state of the pane
     */
    collapsed: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    /**
     * Compact change event
     * @event update:compact
     * @type {Boolean}
     */
    ['update:collapsed'] (bool) {
      this.$emit('update:collapsed', bool)
    }
  }
}