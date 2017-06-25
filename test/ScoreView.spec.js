import Vue from 'vue'
import store from '../src/store'
import * as types from '../src/store/mutations'
import ScoreView from '../src/components/ScoreView.vue'

describe('Score View Component Test', () => {

  const vm = new Vue({
    el: document.createElement('div'),
    store,
    render: h => h(ScoreView)
  })

  it('should change title on click button', (done) => {
    const title = vm.$el.querySelectorAll('span')[1];
    const button = vm.$el.querySelector('button')
    expect(title.textContent).toEqual('default')
    button.click()
    Vue.nextTick(() => {
      const newtitle = vm.$el.querySelectorAll('span')[1];
      expect(newtitle.textContent).toEqual('newTitle')
      done()
    })
  })
})
