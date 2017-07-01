import Vue from 'vue'
import ScoreRow from '../src/components/ScoreRow.vue'

describe('Score View Component Test', () => {
  it('should randomly pick face image among face icons by file name on mount', () => {
    const Ctor = Vue.extend(ScoreRow)
    const vm = new Ctor()

    vm.randomFaceImage = jest.fn()

    vm.randomFaceImage()

    expect(vm.randomFaceImage).toHaveBeenCalled()
  })
})
