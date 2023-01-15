
import React from 'react';
// { useRef }
import './style.css'
import ReCaptacha from "react-google-recaptcha";
// import axios from 'axios';
// import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
// import {Doctor} from '../components/Doctor';

// import * as ReactDOM from 'react-dom';

interface SignUpProps {
  name?: any;
  value?: any;
}
interface SignUpState {
  email: string,
  password: string,
  errors: {

    email: string,
    password: string
  }
}
const Regex = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i);



export class SignUp extends React.Component<SignUpProps, SignUpState>{

  constructor(props: SignUpProps) {
    super(props);
    const initialState = {
      email: '',
      password: '',
      errors: {
        email: '',
        password: ''
      }
    }
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);

  }



  handleChange = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {

      case 'email':
        errors.email = Regex.test(value) ? '' : 'Email is not valid!';
        break;
      case 'password':
        errors.password = value.length < 8 ? 'Password must be eight characters long!' : '';
        break;
      default:
        break;
    }
    this.setState(Object.assign(this.state, { errors, [name]: value }));
    console.log(this.state.errors);
  }


  handleSubmit = (event: any) => {

    // var user = {
    
    //   email:this.state.email,
    //   password:this.state.password,

    // };
  
    event.preventDefault();
    alert("Login was successful");
    window.location.href="/doctor"
    
    // axios.get(`http://localhost:5000/login`)
    // .then(res => {
    // const user: any[]=res.data;
    // console.log(user);
   
        
    // })
   
  }

  render() {
    const { errors } = this.state
 
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Login</h2>

          <form onSubmit={this.handleSubmit} noValidate >
         
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' onChange={this.handleChange} />
              {errors.email.length > 0 && <span style={{ color: "red" }}>{errors.email}</span>}
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input type='password' name='password' onChange={this.handleChange} />
              {errors.password.length > 0 && <span style={{ color: "red" }}>{errors.password}</span>}
            </div>
            <div className='password'>
              {/* ref={captchaRef} */}
              <ReCaptacha sitekey="6LdRo_AjAAAAAKSlA996RxJ48Vo-xvDvVBrt7nSn" />
            </div>
            <div className='submit' >
              <button>Sign In</button>
            </div>
          </form>
        </div>
      </div>








    );







  }
}