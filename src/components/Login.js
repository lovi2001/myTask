import React,{useState} from "react";
import '../style/login.css';
import Validation from './Validation';

const Login = () => {
  const [values , setValues]  = useState({
    email:'' ,
    password:''
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
  } 

  return (
    <>
      <div className="mainDiv">
        <form className="loginform">
          <div className="text">
            <h2>Sign In</h2>
          </div>
          <div className="formfield">
            <label>Email Address</label>
            <input type="email" name="email" placeholder="Enter email" onChange={handleChange} value={values.email} />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="formfield">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={handleChange}
              value={values.password}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="formfield">
            <button type="submit" onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
