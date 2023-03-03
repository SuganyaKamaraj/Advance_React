import { combineReducers } from "redux";
import calculatorReducer from "./calculatorReducer";

export default combineReducers({
    cals:calculatorReducer
   // customers:CustomersReducers
})