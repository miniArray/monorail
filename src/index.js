import * as components from './components'
import './styles/global.css'
import { px } from './utils/toolbelt'

function install (Vue) {
  if (this.installed) return
  this.installed = true

  const gridBase = 8
  const basePadding = px(gridBase * 2)
  const splitViewExpandedWidth = px(gridBase * 38)

  Vue.prototype.$monorail = new Vue({
    data () {
      return {
        settings: {
          gridBase,
          basePadding,
          splitViewExpandedWidth,
          listItemHeight:px(gridBase * 6),
          listItemIcon: px(gridBase * 3),
          colors: {
            base: 'hsl(0, 0%, 0%)',
            baseHighColor: 'hsl(199.6, 78.6%, 49.6%)',
            navigationItemHover: '#cecece',
            navigationItemActive: '#b7b7b7'
          }
        }
      }
    }
  })

  Vue.mixin

  Object.values(components).map(component => {
    Vue.use(component)
  })
}

function Monorail (Vue) {
  Vue.use({ install })
}

if (typeof window !== 'undefined' && window.Vue) Monorail(window.Vue)

export default Monorail