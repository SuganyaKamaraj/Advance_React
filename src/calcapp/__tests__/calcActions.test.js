import { ADD,SUBTRACT } from "../actions/types";
import {addInputs,subtractInputs} from '../actions/calculatorActions'

describe("Testng ACTIONS",()=>{
    it('addInputs test',()=>{
        const addResult=addInputs(10,5)
        expect(addResult).toEqual({type:ADD,payload:15})
    })
    it('subtract test',()=>{
        const subResult=subtractInputs(10,5)
        expect(subResult).toEqual({type:SUBTRACT,payload:5})
    })
})

