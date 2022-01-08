import * as types from '../constants';
const initialState = {
    restObjectData:{}
};

function configReducer(state = initialState, action) {
    switch (action.type) {
        case types.REST_DETAILS:
            return {
                ...state, restObjectData: action.data
            }
        
        default:
            return state;
    }
};

export default configReducer;