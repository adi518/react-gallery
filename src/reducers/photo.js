import { handleActions } from 'redux-actions'

import * as AT from '../actions/photo'

const initialState = {}

export const photoReducer = handleActions(
  {
    [AT.SET_PHOTOS]: (_state = initialState, action) =>
      action.payload.reduce((acc, photo) => {
        acc[photo.albumId] = acc[photo.albumId] || []
        acc[photo.albumId].push(photo)
        return acc
      }, {})
  },
  initialState
)
