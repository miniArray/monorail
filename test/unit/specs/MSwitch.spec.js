import Vue from 'vue'
import MSwitch from '../../../src/components/MSwitch/MSwitch.vue'

describe('HelloWorld.vue', () => {
  let vm

  beforeEach(() => {
    const Constructor = Vue.extend(MSwitch)
    vm = new Constructor().$mount()
  })

  it('should render correct contents', () => {
    const content = vm.$el.querySelector('.caption').textContent
    expect(content).toEqual('')
  })
})
