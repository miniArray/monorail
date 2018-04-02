import MApp from './MApp.vue'

MApp.install = function install (Vue) {
  Vue.component(MApp.name, MApp)
}

export default MApp