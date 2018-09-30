import { createActionTypeMap } from '../../utils'
import defaultActionTypes from '../defaultActionTypes'

// creatring specefic names for Account actions
export default createActionTypeMap("ACCOUNT", [
    ...defaultActionTypes,
    "LOGIN",
    "LOGOUT"
])
