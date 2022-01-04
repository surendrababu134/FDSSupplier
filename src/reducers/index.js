import { combineReducers } from "redux";
import ItemsService from './items';
import UserService from './users';

const rootReducer = combineReducers({
    ItemsService,
    UserService
});

export default rootReducer;