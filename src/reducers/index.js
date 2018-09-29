import { combineReducers } from "redux"
import game from './gameReducer'
import category from './categoryReducer'

export default combineReducers({
    game,
    category
})
