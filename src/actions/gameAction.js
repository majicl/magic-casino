import api from '../api/mockGameApi'
import gameActions from './gameActionType'
const { GETLIST } = gameActions

export const getAllGames = () => {
    return {
        type: GETLIST,
        payload: api.getAllGames()
    }
}
