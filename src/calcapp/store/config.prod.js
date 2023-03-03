//production build config

//stoe configurations
//create store
import { applyMiddleware, legacy_createStore as createStore } from "redux"
import calculatorReducer from "../reducers/calculatorReducer" 

export const store=createStore(reducers)


