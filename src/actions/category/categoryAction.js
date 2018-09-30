import api from '../../api/mockGameApi'
import categoryActions from './categoryActionType'
const { GETLIST } = categoryActions

export /**
 * an action to ftech all categories from API
 * @returns 
 */
const getGameCategories = () => {
    return {
        type: GETLIST,
        payload: api.getAllGameCategories()
    }
}
