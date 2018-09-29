import api from '../../api/mockGameApi'
import gameActions from './gameActionType'
const { GETLIST, SEARCH, SEARCHBYKEYWORD, SEARCHBYCATEGORY } = gameActions

export const getGames = () => {
    return {
        type: GETLIST,
        payload: api.getAllGames()
    }
}

export const searchGames = (keyword, categoryIds) => {
    return {
        type: SEARCH,
        payload: api.getAllGames(keyword, categoryIds)
    }
}

export const searchByKeyword = (keyword) => {
    return (dispatch, getState) => {
        const state = getState()
        const { categoryIds } = state.game.searchOption
        dispatch({
            type: SEARCHBYKEYWORD,
            keyword: keyword
        })
        dispatch(searchGames(keyword, categoryIds))
    }
}

export const searchByCategories = (categoryIds) => {
    return (dispatch, getState) => {
        const state = getState()
        const { keyword } = state.game.searchOption
        dispatch({
            type: SEARCHBYCATEGORY,
            categoryIds: categoryIds
        })
        dispatch(searchGames(keyword, categoryIds))
    }
}
