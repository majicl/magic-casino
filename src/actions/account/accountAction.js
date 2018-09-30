import api from '../../api/mockAccountApi'
import accountActions from './accountActionType'
const { LOGIN, LOGOUT } = accountActions

export /**
 * an action for loging in 
 * @param {any} user 
 * @returns 
 */
const login = (user) => {
    return {
        type: LOGIN,
        payload: api.login(user)
    }
}

export /**
 * an action for loging out
 * @param {object} user 
 * @returns 
 */
const logout = (user) => {
    return {
        type: LOGOUT,
        payload: api.logout(user)
    }
}
