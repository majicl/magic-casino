import api from '../../api/mockGameApi'
import categoryActions from './categoryActionType'
const { GETLIST } = categoryActions

export const getGameCategories = () => {
    return {
        type: GETLIST,
        payload: api.getAllGameCategories()
    }
}
