import api from '../../api/mockAccountApi'
import accountActions from './accountActionType'
const { LOGIN, LOGOUT } = accountActions

export const login = (user) => {
    return {
        type: LOGIN,
        payload: api.login(user)
    }
}

export const logout = (user) => {
    return {
        type: LOGOUT,
        payload: api.logout(user)
    }
}
