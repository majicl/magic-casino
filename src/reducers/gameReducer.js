import { handleActions } from '../utils'
import gameActions from '../actions/gameActionType'
const { GETLIST, SEARCH } = gameActions

const INITIAL_STATE = {
    games: [],
    loading: false
};

const reducers = {
    [GETLIST]: {
        PENDING: (state, action) => {
            return { ...state, loading: true }
        },
        FULFILLED: (state, action) => {
            return { ...state, games: action.payload, loading: false }
        }
    },
    [SEARCH]: {
        PENDING: (state, action) => {
            return { ...state, searching: true, loading: true }
        },
        FULFILLED: (state, action) => {
            return { ...state, games: action.payload, searching: false, loading: false }
        }
    }
}

export default handleActions(INITIAL_STATE, reducers)
