import React from 'react'
import { connect } from 'react-redux'


const sagaApp = (props) => {
  return (
    <div className='bg-warning text-center'>
        <br> </br>
        <h3 className='text-danger' > Working with Redux-saga Middleware</h3>
        <div className='bg-info'> 
        Your Salary now: <span>{props.salary} </span>
        </div>
        <button className='btn btn-success' onClick={props
        .onSalaryUp}> Hike Salary By 1000/ - </button>

        <button className='btn btn-success' onClick={props.onSalaryDown
    }> Reduce Salary By 1000/ - </button>
    </div>
  )
}

const mapStateToProps= (state) => {
    return {salaryProp:state.salary}
}

const mapDispatchToProps= (dispatch) => {
    return {
        onSalaryUp: () =>dispatch({type:'SALARY_UP',value:1000}),
        onSalaryDown: () =>dispatch({type:'SALARY_DOWN',value:1000})
         
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(sagaApp)