import * as components from './components'

function install (Vue, args) {
  if (this.installed) return
  this.installed = true

  const gridBase = 8
  const basePadding = gridBase * 2
  const listItemIcon = gridBase * 6
  const splitViewExpandedWidth = gridBase * 38
  const baseHighColor = '#1ba1e2'
  const navigationItemHover = '#cecece'
  const navigationItemActive = '#b7b7b7'

  Vue.prototype.$monorail = new Vue({
    data: {
      settings: {
        gridBase,
        basePadding,
        listItemIcon,
        splitViewExpandedWidth,
        colors: {
          baseHighColor,
          navigationItemHover,
          navigationItemActive
        }
      }
    }
  })

  Object.values(components).map(component => {
    Vue.use(component)
  })
}

function Monorail (Vue, args) {
  Vue.use({ install })
}

if (typeof window !== 'undefined' && window.Vue) Monorail(window.Vue)


export default Monorail