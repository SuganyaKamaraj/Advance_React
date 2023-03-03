
import React,{useRef} from 'react'
import {connect} from 'react-redux'
import { addInputs,subtractInputs } from '../actions/calculatorActions'

const Calculator = (props) => {
    const input1=useRef() //React.createRef()
    const input2=useRef()
    let intA,intB

  return (
    <div className="container bg-info">
        <h2>Suganya's Calculator</h2>
        <div>Input1: 
            <input type="text" placeholder="0" ref={input1} id="txt1"/>
        </div>
        <div>Input2: 
            <input type="text" placeholder="0" ref={input2} id="txt2"/>
        </div>
        <div>Output:
            <input type="text"  readOnly  id="txt3" 
            value={props.outputProp}/>
        </div>
        <div>
            <button onClick={ ()=>{
                intA=parseInt(input1.current.value)
                intB=parseInt(input2.current.value)
                props.dispatch(addInputs(intA,intB))
            }}>Add</button>
        </div>
        <div>
            <button onClick={ ()=>{
                intA=parseInt(input1.current.value)
                intB=parseInt(input2.current.value)
                props.dispatch(subtractInputs(intA,intB))
            }}>Subtract</button>
        </div>
    </div>
  )
}
//===================

//callback
const mapStateToProps= (state)=>({
    outputProp:state.output,
 
})

export default connect(mapStateToProps)(Calculator)