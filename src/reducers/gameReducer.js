import { handleActions } from '../utils'
import gameActions from '../actions/game/gameActionType'
const { GETLIST, SEARCH, SEARCHBYKEYWORD, SEARCHBYCATEGORY } = gameActions

const INITIAL_STATE = {
    games: [],
    categories: [],
    searchOption: {
        categoryIds: [],
        keyword: ''
    },
    loading: false
};

const reducers = {
    [SEARCHBYKEYWORD]: (state, action) => {
        return {
            ...state, searchOption: {
                ...state.searchOption,
                keyword: action.keyword
            },
            searching: true
        }
    },
    [SEARCHBYCATEGORY]: (state, action) => {
        return {
            ...state, searchOption: {
                ...state.searchOption,
                categoryIds: action.categoryIds
            }
        }
    },
    [GETLIST]: {
        PENDING: (state, action) => {
            return { ...state, loading: true }
        },
        FULFILLED: (state, action) => {
            return { ...state, games: action.payload, loading: false }
        }
    },
    [SEARCH]: {
        PENDING: (state, action) => {
            return { ...state, loading: true }
        },
        FULFILLED: (state, action) => {
            return { ...state, games: action.payload, searching: false, loading: false }
        }
    }
}

export default handleActions(INITIAL_STATE, reducers)
