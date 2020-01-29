import fetch from 'cross-fetch'

export const SET_PHOTOS = 'Set Photos'

export function list() {
  return async (dispatch, _getState) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    const photos = await response.json()
    return dispatch({ type: SET_PHOTOS, payload: photos })
  }
}
