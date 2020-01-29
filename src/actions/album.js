import fetch from 'cross-fetch'

export const SET_ALBUMS = 'Set Albums'

export function list({ limit } = {}) {
  return async (dispatch, _getState) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums')
    const albums = (await response.json()).slice(0, limit)
    return dispatch({ type: SET_ALBUMS, payload: albums })
  }
}
