import { handleActions } from '../utils'
import gameActions from '../actions/gameActionType'
const { GETLIST } = gameActions
const INITIAL_STATE = {
    item: undefined,
    items: [],
    loading: false
};

const reducers = {
    [GETLIST]: (state, action) => {
        return { ...state, item: Object.assign({}, action.item), loading: false }
    }
}

export default handleActions(INITIAL_STATE, reducers)
