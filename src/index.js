/* 
 import { applyMiddleware, legacy_createStore  as createStore } from "redux";
 import logger from "redux-logger";

const reducer=function(state,action){
  if (action.type==='INC'){
    //let oldstate={...state}
    return  state+action.payload
  }
  if (action.type==='DEC'){
    return state-action.payload
  }
   return state
}

const middleware=applyMiddleware(logger)
const store=createStore(reducer,1,middleware)

store.subscribe( ()=>console.log(`Store :${ store.getState()}`)) //1,6,2,5,5

store.dispatch({type:'INC',payload:5})
store.dispatch({type:'DEC',payload:4})
store.dispatch({type:'INC',payload:3})
store.dispatch({type:'MULTIPLY',payload:5}) */


//Level 3:

// import { applyMiddleware, combineReducers, legacy_createStore  as createStore } from "redux";
// import logger from "redux-logger";
// import {composeWithDevTools} from 'redux-devtools-extension'

// const userReducers=(state={},action) =>{
//   switch(action.type)
//   {
//     case "CHANGE_NAME":{
//       return state={...state,name:action.payload}
//     }
//     case "CHANGE_SALARY":{
//       return state={...state,salary:action.payload}
//     }
//     default:{
//       return state
//     }
//   }

// }
// const customersReducers=(state=[],action)=>{
//   return state
// }

// const allReducers=combineReducers({

//     user: userReducers, //imitslly empty
//     customers: customersReducers
// })

// /*
// state tree
// {
//   user:{},
//   customer:[]
// } */


// const store=createStore(allReducers,composeWithDevTools(applyMiddleware(logger)))


// store.subscribe( ()=>console.log(`Store :${ store.getState()}`)) 

// store.dispatch({type:'CHANGE_NAME',payload:'Suganya'})
// store.dispatch({type:'CHANGE_SALARY',payload:10000})
// store.dispatch({type:'CHANGE_NAME',payload:'Suganya K' })
// store.dispatch({type:'CHANGE_CITY',payload:'Chennai'})




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// METHOD: 4
// import { applyMiddleware, combineReducers, legacy_createStore  as createStore } from "redux";
// import logger from "redux-logger";
// import {composeWithDevTools} from 'redux-devtools-extension'
// import axios from 'axios';
// import thunk from 'redux-thunk';
// import { type } from "@testing-library/user-event/dist/type";

// const initialState={
//   fetching:false,
//   fetched:false,
//   users:[],
//   error:null
// }
// const reducer=(state=initialState,action)=>{
//   switch(action.type)
//   {
//     case "FETCH_USERS_STARTED" :{
//       return {...state,fetching:true}
//     }
//     case "RECEIVED_USERS" :{
//       return {...state,fetching:false,fetched:true,users:action.payload}

//     }
//     case "FETCH_ERROR" :{
//       return {...state,fetching:false,error:action.payload}
//     }
//     default: return state
//   }

// }
// const store=createStore(reducer,composeWithDevTools(applyMiddleware(thunk,logger)))

// store.subscribe( ()=>console.log(`Store :${store.getState()}`)) 

// //call back fuction dispatch - promise; multiple dispatch; fetch-more powerful so axios
// store.dispatch((dispatch)=>{ //ask frd i'll play the game;driving
//   //multiple actions make dispatch, change action/payload,decision can be taken
//        dispatch({type:"FETCH_USERS_STARTED"}) //payload optional - ask user to wait to aviod multiple
//   axios.get("https://jsonplaceholder.typicode.com/users")
//     .then ((response) => {
//       dispatch({type:"RECEIVED_USERS",payload:response.data})
//     })
//     .catch((error)=>{
//         dispatch({type:"FETCH_ERROR", payload:error})

//     })

// })


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import {store} from './calcapp/store/config.dev'; //cal app
//import { store } from './bank/store/config.dev'; //bank app
import {Provider} from 'react-redux';

////redux-saga
import { legacy_createStore as createStore,applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {watchSalaryUp} from './sagaapp/sagas/sagawatcher';
import reducer from './sagaapp/store/reducer';

const sagaMiddleware =createSagaMiddleware();
const store =createStore(reducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchSalaryUp);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      bank & calc app
    <Provider store={store}>
    <App />
    </Provider> 
    
  </React.StrictMode>
);

reportWebVitals();