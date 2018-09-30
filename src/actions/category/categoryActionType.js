import { createActionTypeMap } from '../../utils'
import defaultActionTypes from '../defaultActionTypes'

// creatring specefic names for Category actions
export default createActionTypeMap("CATEGORY", [
    ...defaultActionTypes
])
