import { handleActions } from '../utils'
import categoryAction  from '../actions/category/categoryActionType'
const { GETLIST } = categoryAction

// initiate stete of category
const INITIAL_STATE = {
    categories: [],
    loading: false
}

//reducer for category actions
const reducers = {
    [GETLIST]: {
        PENDING: (state, action) => {
            return { ...state, catLoading: true }
        },
        FULFILLED: (state, action) => {
            return { ...state, categories: action.payload, catLoading: false }
        }
    }
}

export default handleActions(INITIAL_STATE, reducers)
