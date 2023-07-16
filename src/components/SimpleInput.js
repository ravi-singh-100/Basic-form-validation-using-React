
// import useInput from "../hooks/useInput";
import useInputReducer from "../hooks/useInputReducer";
const SimpleInput = (props) => {
  const{value:name,isValid:nameIsValid,hasError:nameError,valueBlurHandler:nameBlurHandler,valueHandler:nameHandler ,reset:namereset}=useInputReducer(value=>value.trim()!=='');
  const{value:email,isValid:emailIsValid,hasError:emailError,valueBlurHandler:emailBlurHandler,valueHandler:emailHandler,reset:emailreset}=useInputReducer(value=> value.includes('@'));
let formIsValid=false;
    if(nameIsValid&&emailIsValid){
      formIsValid=true;
    }


const submitFormHandler=event=>{
  event.preventDefault();
  if(!formIsValid){
    return;
  }
namereset();
emailreset()
}

// const inputClassName=?'form-control':'form-control invalid' 
  return (
    <form onSubmit={submitFormHandler}>
      <div className={`form-control ${nameError?'invalid':''}`} >
        <label htmlFor='name'>Your Name</label>
        <input onBlur={nameBlurHandler} onChange={nameHandler} type='text' id='name' value={name}/>
       {nameError &&<p className="error-text">Enter the correct Name</p>}
      </div>
      <div className={`form-control ${emailError?'invalid':''}`}>
        <label htmlFor="email">Yor Email</label>
        <input onBlur={emailBlurHandler} onChange={emailHandler} type="email" id="email" value={email}></input>
      </div>
      {emailError &&<p className="error-text">Enter the Valid Email</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
