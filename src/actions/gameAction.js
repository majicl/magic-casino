import api from '../api/mockGameApi'
import gameActions from './gameActionType'
const { GETLIST, SEARCH } = gameActions

export const getGames = () => {
    return {
        type: GETLIST,
        payload: api.getAllGames()
    }
}

export const searchGames = (keyword) => {
    return {
        type: SEARCH,
        payload: api.getAllGames(keyword)
    }
}

