import * as types from '../constants';
const initialState = {
    data:{},
    signInData:{}
};

function configReducer(state = initialState, action) {
    switch (action.type) {
        case types.SIGN_UP:
            return {
                ...state, data: action.data
            }
        case types.SIGN_IN:
            return {
                ...state, signInData: action.data
            }
        default:
            return state;
    }
};

export default configReducer;