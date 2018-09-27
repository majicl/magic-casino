import { createActionTypeMap } from '../utils';
import defaultActionTypes from './defaultActionTypes';

export default createActionTypeMap("TODO", [
    ...defaultActionTypes
]);
