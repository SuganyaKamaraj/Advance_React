//Redux - mini redux=>useReducer

import React,{useReducer} from 'react'

const initialState={count:10}
function reducer(state,action){
    switch (action.type){
        case 'INC':
               return {count:state.count+action.payload}
        case 'DEC':
            return {count:state.count-action.payload}
        default: return state
    }
}

function UseReducerDemo(){
    const [state,dispatch]=useReducer(reducer,initialState)
    return (
        <div className="bg-warning">
            <h1>useReducer Demo</h1>
            <h4>{state.count}</h4>

            <button className="btn btn-success"
            onClick={ ()=>dispatch({type:'INC',payload:10})}
            >INCREMENT </button>

             <button className="btn btn-danger"
            onClick={ ()=>dispatch({type:'DEC',payload:5})}
            >DECREMENT</button>
        </div>
    )
}
export default UseReducerDemo