import { createActionTypeMap } from '../../utils'
import defaultActionTypes from '../defaultActionTypes'

export default createActionTypeMap("GAME", [
    ...defaultActionTypes,
    "SEARCH",
    "SEARCHBYKEYWORD",
    "SEARCHBYCATEGORY"
])
