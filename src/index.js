import * as components from './components'

function install (Vue, args) {
  if (this.installed) return

  this.installed = true

  Vue.prototype.$monorail = new Vue({
    data: {
      dark: false
    },
  })

  Object.values(components).map(component => {
    Vue.use(component)
  })

//   Vue.component(MSwitch.name, MSwitch)
}

function Monorail (Vue, args) {
  Vue.use({ install })
}

if (typeof window !== 'undefined' && window.Vue) Monorail(window.Vue)

export default Monorail