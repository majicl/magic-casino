import { createActionTypeMap } from '../../utils'
import defaultActionTypes from '../defaultActionTypes'

export default createActionTypeMap("ACCOUNT", [
    ...defaultActionTypes,
    "LOGIN",
    "LOGOUT"
])
