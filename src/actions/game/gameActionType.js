import { createActionTypeMap } from '../../utils'
import defaultActionTypes from '../defaultActionTypes'

// creatring specefic names for Game actions
export default createActionTypeMap("GAME", [
    ...defaultActionTypes,
    "SEARCH",
    "SEARCHBYKEYWORD",
    "SEARCHBYCATEGORY"
])
