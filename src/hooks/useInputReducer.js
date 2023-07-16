import { useReducer } from "react";
const initialInputState={
    value:'',
    isTouched:false
}
const inputStateReducer =(prevSnapshot,action)=>{
    if(action.type==='INPUT'){
return{
    value:action.value,
    isTouched:prevSnapshot.isTouched
}
    }
    if(action.type==='BLUR'){
return{
    isTouched:true,
    value:prevSnapshot.value
}
    }
    if(action.type==='RESET'){
        return{
           value:'',
            isTouched:false
        }
      
    }
return initialInputState;
}
const useInputReducer=(func)=>{
const[state,dispatcherFunc]=useReducer(inputStateReducer,initialInputState);
const valueIsValid=func(state.value);
const hasError=!valueIsValid&&state.isTouched;
const valueHandler=(event)=>{
dispatcherFunc({type:'INPUT',value:event.target.value})
}
const valueBlurHandler=(event)=>{
dispatcherFunc({type:'BLUR'})
}
const reset=()=>{
    dispatcherFunc({type:'RESET'})
}
return{
    value:state.value,
    isValid:valueIsValid,
    hasError:hasError,
valueBlurHandler:valueBlurHandler,
valueHandler:valueHandler,
reset:reset
}
}
export default useInputReducer;