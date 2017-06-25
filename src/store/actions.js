import * as types from './mutations'

export const getData = ({dispatch}) => {
  fetch('/get data url').then(
    (response) => {
      dispatch(types.setData, response.data)
    }, (error) => {
      console.log(error)
    })
}

export const setTitle = ({commit}, title) => {
  commit(types.setTitle, title)
}
