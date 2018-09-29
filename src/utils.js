  import { bindActionCreators as reduxBindActionCreators } from 'redux';
  import typeToReducer from 'type-to-reducer';
  
  export const createActionTypeMap = (prefix, actionTypeArray) => {
    const actionTypeMap = {};
    for (const actionType of actionTypeArray) {
      actionTypeMap[actionType] = `${prefix}_${actionType}`;
    }
    return actionTypeMap;
  };
  export const bindActionCreators = (actionContainerMapArray, dispatch) => {
    const allActions = {};
  
    if (!Array.isArray(actionContainerMapArray)) {
      actionContainerMapArray = [actionContainerMapArray];
    }
  
    for (const actionContainerMap of actionContainerMapArray) {
      for (const actionContainerName in actionContainerMap) {
        const actionContainer = actionContainerMap[actionContainerName];
  
        if (typeof allActions[actionContainerName] === 'undefined') {
          allActions[actionContainerName] = reduxBindActionCreators(actionContainer, dispatch);
        } else {
          throw new Error(`Overlapping actions found: '${actionContainerName}'`);
        }
      }
    }
    return allActions;
  };
  
  export const handleActions = (initialState, reducerMap) => {
    const createRejectionReducer = (subReducer) => (state, action) => {
      try {
        return subReducer(state, action);
      } catch (e) {
        setTimeout(() => {
          throw e;
        });
      }
    };
  
    const createFulfillingReducer = (subReducer) => (state, action) => {
      try {
        return subReducer(state, action);
      } catch (e) {
        setTimeout(() => {
          throw e;
        });
      }
    };
  
    for (const key in reducerMap) {
      const reducer = reducerMap[key];
  
      if (key === "undefined") {
        throw new Error("action name can not be undefined");
      }
  
      if (typeof reducer === 'object') {
        for (const subKey in reducer) {
          const subReducer = reducer[subKey];
  
          if (subKey === 'FULFILLED') {
            reducer[subKey] = createFulfillingReducer(subReducer);
          } else if (subKey === 'REJECTED') {
            reducer[subKey] = createRejectionReducer(subReducer);
          }
        }
      }
    }
  
    return typeToReducer(reducerMap, initialState);
  };
  