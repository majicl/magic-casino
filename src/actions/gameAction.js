import api from '../api/mockGameApi'
import gameActions from './gameActionType'
const { GETLIST } = gameActions

export function getAllGameCategories() {
    return {
        type: GETLIST,
        payload: api.getAllGameCategories()
            .then(api.getAllCourses)
    }
}
