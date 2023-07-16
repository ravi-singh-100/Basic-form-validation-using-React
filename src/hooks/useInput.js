import { useState } from "react";
const useInput=(func)=>{
    const[enteredValue,setEnteredValue]=useState('');
    const[enteredValueTouched,setEnteredValueTouched]=useState(false);
    const valueIsValid= func(enteredValue)
    const hasError=enteredValueTouched&&!enteredValue;
    const valueBlurHandler=()=>{
    setEnteredValueTouched(true);
          }
        
        const valueHandler=(event)=>{
          setEnteredValue(event.target.value)
        }
        const reset=()=>{
            setEnteredValue('');
            setEnteredValueTouched(false);
        }
    return{
        value:enteredValue,
        isValid:valueIsValid,
        hasError:hasError,
valueBlurHandler:valueBlurHandler,
valueHandler:valueHandler,
reset:reset
    }
}
export default useInput;