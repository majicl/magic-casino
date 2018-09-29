import { combineReducers } from "redux"
import game from './gameReducer'
import category from './categoryReducer'
import account from './accountReducer'

export default combineReducers({
    game,
    category,
    account
})
