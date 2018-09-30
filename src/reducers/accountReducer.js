import { handleActions } from '../utils'
import accountAction  from '../actions/account/accountActionType'
const { LOGIN, LOGOUT } = accountAction

const INITIAL_STATE = {
    user: undefined,
    loginLoading: false
}

const reducers = {
    [LOGIN]: {
        PENDING: (state, action) => {
            return { ...state, loginLoading: true, error: undefined }
        },
        FULFILLED: (state, action) => {
            return { ...state, user: action.payload.player, loginLoading: false }
        },
        REJECTED: (state, action) => {
            return { ...state, error: action.payload, loginLoading: false }
        },
    },
    [LOGOUT]: {
        PENDING: (state, action) => {
            return { ...state, loginLoading: true }
        },
        FULFILLED: (state, action) => {
            return { ...state, user: undefined, loginLoading: false }
        },
        REJECTED: (state, action) => {
            return { ...state, error: action.payload, loginLoading: false }
        },
    }
}

export default handleActions(INITIAL_STATE, reducers)
