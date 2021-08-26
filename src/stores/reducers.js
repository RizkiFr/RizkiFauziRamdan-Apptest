import { combineReducers } from "redux";
import contact from './contact/reducer';

const rootReducer = combineReducers({
    contact,
})

export default rootReducer
