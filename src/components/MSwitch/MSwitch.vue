<template>
  <label class="switch">
    <input
      :checked="checked"
      :disabled="disabled"
      type="checkbox"
      @change="change">
    <span
      class="check"
      style="outline: none" />
    <span class="caption">{{ caption }}</span>
  </label>
</template>

<style scoped>
</style>

<script>
/**
 * @see See https://getmwf.com/components/form/toggle.html for more details.
 */
export default {
  name: 'MSwitch',

  model: {
    event: 'change',
    prop: 'checked'
  },

  props: {
    /**
     * Caption next to the switch
     */
    caption: {
      type: String,
      default: ''
    },
    /**
     * Disabled state of the switch
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Checked state of the switch
     */
    checked: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    /**
     * Change event
     * @event change
     * @type {boolean}
     */
    change () {
      this.$emit('change', this.checked)
    }
  }
}
</script>

<docs>
[More Info](https://metroui.org.ua/forms.html#_switch)

### With caption

```js
<m-switch caption="Check">
```

### Checked

```js
<m-switch caption="Check" checked>
```

### Disabled

```js
<m-switch caption="Check" disabled>
```

### Checked & Disabled

```js
<m-switch caption="Check" checked disabled>
```

### Checked Event
```js
new Vue({
  template: `<m-switch :checked="state" @change="change" />`,

  methods: {
    change () {
      this.state = !this.state
    }
  },

  data () {
    return {
      state: true
    }
  }
})
```
</docs>
