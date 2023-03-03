import  {ADD,SUBTRACT}  from "./types"

export const addInputs = (input1, input2) => {
    let output = input1+input2
    return {type:ADD, payload:output}

}
export const subtractInputs = (input1, input2) => {
    let output = input1-input2
    return {type:SUBTRACT, payload:output}
}