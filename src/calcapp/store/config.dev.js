//stoe configurations
//create store
import { applyMiddleware, legacy_createStore as createStore } from "redux"
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from "redux-logger"
import calculatorReducer from "../reducers/calculatorReducer" //onlyone mention that one else index
//import { Reducer } from "react"

export const store=createStore(calculatorReducer,
    composeWithDevTools(applyMiddleware(logger))
    )

store.subscribe(()=> console.log(store.getState()))
