import * as components from './components'

function install (Vue, args) {
  if (this.installed) return
  this.installed = true

  const gridBase = 8
  const listItemIcon = gridBase * 6
  const splitViewExpandedWidth = gridBase *38

  Vue.prototype.$monorail = new Vue({
    data: {
      settings: {
        gridBase,
        listItemIcon,
        splitViewExpandedWidth
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