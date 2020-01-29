import { combineReducers } from 'redux'
import { albumReducer } from './album'
import { photoReducer } from './photo'

export const rootReducer = combineReducers({
  albums: albumReducer,
  photos: photoReducer
})

export {}
