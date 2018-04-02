<template>
  <div :class="{ collapsed }">
    <div
      v-if="value.caption"
      class="m-title">
      {{ value.caption }}
    </div>
    <m-navigation-item
      v-for="(item, index) in value.items"
      :key="index"
      :to="item.to"
      :active-uid="activeUid"
      :caption="item.caption">
      {{ item.icon }}
    </m-navigation-item>
  </div>
</template>

<script>
import collapsable from '../../mixins/collapsable'
import MNavigationItem from '../MNavigationItem'

export default {
  name: 'MNavigationGroup',

  components: {
    MNavigationItem
  },

  mixins: [
    collapsable
  ],

  props: {
    /**
     * Group collection
     */
    value: {
      type: Object,
      default () {
        return {}
      }
    },

    /**
     * @ignore
     */
    activeUid: {
      type: Number,
      default: -1
    },
  }
}
</script>

<style scoped lang="postcss">
.m-title {
  display: block;
  float: none;
  position: relative;
  cursor: pointer;
  background-color: inherit;
  height: 40px;
  font-size: 12px;
  line-height: 40px;
  color: hsl(0, 0%, 45.9%);
  border-bottom: 1px solid hsl(0, 0%, 84.7%);
  font-weight: 600;
  pointer-events: none;
  margin: 9px 18px;
}

.collapsed .m-title {
  height: 0;
  font-size: 0;
  width: 15px;
  margin: 8px 17px;
}
</style>