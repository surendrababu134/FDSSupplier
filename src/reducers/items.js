import * as types from '../constants';
const initialState = {
    data:{}
};

function configReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_ITEMS:
            return {
                ...state, data: action.data
            }
        default:
            return state;
    }
};

export default configReducer;