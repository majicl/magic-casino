import { handleActions } from '../utils'
import accountAction  from '../actions/account/accountActionType'
const { LOGIN, LOGOUT } = accountAction

// initiate stete of account
const INITIAL_STATE = {
    user: undefined,
    loginLoading: false
}

//reducer for account actions
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
