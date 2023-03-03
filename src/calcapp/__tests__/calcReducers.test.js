import calculatorReducer from '../reducers/calculatorReducer'
import {ADD,SUBTRACT} from '../actions/types'

describe("Test calcreducer",()=>{
    it('ADD test',()=>{
        let state={output:0} //store initial state
        state=calculatorReducer(0,{type: ADD,payload:500})
        expect(state).toEqual({output:500})
    })
    it('SUBTRACT test',()=>{
        let state={output:0} //store initial state
        state=calculatorReducer(0,{type:SUBTRACT ,payload:200})
        expect(state).toEqual({output:200})
    })
})