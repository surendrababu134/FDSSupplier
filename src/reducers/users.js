import * as types from '../constants';
const initialState = {
    data:{}
};

function configReducer(state = initialState, action) {
    switch (action.type) {
        case types.SIGN_UP:
            console.log(action)
            return {
                ...state, data: action.data
            }
        default:
            return state;
    }
};

export default configReducer;