import {
    connect as reduxConnect
  } from 'react-redux';
  import { bindActionCreators as reduxBindActionCreators } from 'redux';
  import $ from 'jquery';
  import typeToReducer from 'type-to-reducer';
  import _ from 'lodash';
  
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
  
  export const connect = (mapStateToProps, mapDispatchToProps) => {
    const mergeProps = (props1, props1Title, props2, props2Title) => {
      const allProps = { ...props1 };
  
      for (const propKey in props2) {
        const prop = props2[propKey];
  
        if (typeof allProps[propKey] === 'undefined') {
          allProps[propKey] = prop;
        } else if (_.isObjectLike(prop)) {
          allProps[propKey] = mergeProps(allProps[propKey], props1Title, prop, props2Title);
        } else {
          throw new Error(`Overlapping props found: '${propKey}' between '${props1Title}' and '${props2Title}'`);
        }
      }
  
      return allProps;
    };
  
    return reduxConnect(mapStateToProps, mapDispatchToProps, (stateProps, dispatchProps, ownProps) => {
      const merge1 = mergeProps(ownProps, 'ownProps', stateProps, 'stateProps');
      const merge2 = mergeProps(merge1, 'ownProps+stateProps', dispatchProps, 'dispatchProps');
  
      return merge2;
    }, {
        // TODO: should implement a better way like deep equal checking of stateProps instead of re-renders
        pure: false
      });
  };
  
  export const handleActions = (initialState, reducerMap) => {
    const createRejectionReducer = (subReducer) => (state, action) => {
      if ($.isCancel(action.payload)) {
        return state;
      }
  
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
  