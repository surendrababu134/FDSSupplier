import { combineReducers } from "redux";
import ItemsService from './items';
import UserService from './users';
import ResturantService from './resturants';

const rootReducer = combineReducers({
    ItemsService,
    UserService,
    ResturantService
});

export default rootReducer;