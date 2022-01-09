import * as types from '../constants';
const initialState = {
    restObjectData:{},
    restGetObjectData:{}
};

function configReducer(state = initialState, action) {
    switch (action.type) {
        case types.REST_DETAILS:
            return {
                ...state, restObjectData: action.data
            }
        case types.REST_GET_DETAILS:
            return {
                ...state, restGetObjectData: action.data
            }
        default:
            return state;
    }
};

export default configReducer;