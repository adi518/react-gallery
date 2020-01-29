import { handleActions } from 'redux-actions'

import * as AT from '../actions/album'

const initialState = []

export const albumReducer = handleActions(
  { [AT.SET_ALBUMS]: (_state = initialState, action) => action.payload },
  initialState
)
