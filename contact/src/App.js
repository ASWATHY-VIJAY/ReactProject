import { useState , useEffect } from "react";
import './App.css';

function App() {
  const initialValues = { username: "", phone: "", password: ""};
  const [formValues, setFormValues]= useState(initialValues);
  const [formErrors, setFormErrors]= useState({});
  const [submit, SetIsSubmit]= useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    SetIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
   if (Object.keys(formErrors).length ===0 && submit) {
    console.log(formValues);
   }
   // eslint-disable-next-line
  },[formErrors])
  const validate = (values) => {
   const errors = {};
   if (!values.username) {
    errors.username = "Username is required"
   }
   if (!values.phone) {
    errors.phone = "Phone number is required"
   }
   if (!values.password) {
    errors.password = "password is required"
   }
   return errors;
  };
  return (
    <div className="container">
      <pre>{ JSON.stringify(formValues, undefined, 2)}</pre>
      <form onSubmit={handleSubmit}>
       <h1>Login</h1>
       <div className="ui divider"></div>
       <div className="ui form">
        <div className="field">
          <label>Username</label>
          <input 
          type="text" 
          name="username" 
          placholder="Username"
          value={formValues.username}
          onChange={handleChange}/>
         
        </div>
        <p>{formErrors.username}</p>
        <div className="field">
          <label>Phone</label>
          <input 
          type="number" 
          name="phone" 
          placholder="Phone" 
          value={formValues.phone}
          onChange={handleChange}/>
         
        </div>
        <p>{formErrors.phone}</p>
        <div className="field">
          <label>Password</label>
          <input 
          type="password" 
          name="password" 
          placholder="Password" 
          value={formValues.password}
          onChange={handleChange}/>
       
        </div>
        <p>{formErrors.password}</p>
        <button className="fluid ui button blue">Submit</button>
       </div>

      </form>
  </div>
  );
}

export default App;
