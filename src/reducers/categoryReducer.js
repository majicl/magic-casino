import { handleActions } from '../utils'
import categoryAction from '../actions/categoryActionType'
const { GETLIST } = categoryAction

const INITIAL_STATE = {
    categories: [],
    loading: false
};

const reducers = {
    [GETLIST]: {
        PENDING: (state, action) => {
            return { ...state, loading: true }
        },
        FULFILLED: (state, action) => {
            return { ...state, categories: action.payload, loading: false }
        }
    }
}

export default handleActions(INITIAL_STATE, reducers)
