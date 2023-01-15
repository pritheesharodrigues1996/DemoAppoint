
import React from 'react';
// { useRef }
import './style.css'
import ReCaptacha from "react-google-recaptcha";
import axios from 'axios';
// import { useNavigate } from "react-router-dom";
// import {Doctor} from '../components/Doctor';

// import * as ReactDOM from 'react-dom';



interface RegisterProps {
  name?: any;
  value?: any;
}
interface RegisterState {
  username: string,
  email: string,
  password: string,
  age:Number;
  errors: {
    username: string,
    email: string,
    password: string,
   age:Number;
  }
}
const Regex = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i);

export class Registration extends React.Component<RegisterProps, RegisterState>{
     
  constructor(props: RegisterProps) {
    super(props);
 
    const initialState = {
      username: '',
      email: '',
      password: '',
      age:0,
      errors: {
        username: '',
        email: '',
        password: '',
        age:0,
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
    case 'username':
            errors.username = value.length < 0 ? 'Email is not valid!':value ;
            break;
     
      case 'email':
        errors.email = Regex.test(value) ? value: 'Email is not valid!';
        break;
      case 'password':
        errors.password = value.length < 8 ? 'Password must be eight characters long!' : value;
        break;
      case 'age':
        errors.age = value.size<0 ? 'Password must be eight characters long!' : value;
        break;
      default:
        break;
    }
    this.setState(Object.assign(this.state, { errors, [name]: value }));
    console.log(this.state.errors);
  }


  handleSubmit = (event: any) => {

    // const navigate = useNavigate();
    event.preventDefault();
    const user = {
        username: this.state.username,
        email:this.state.email,
        password:this.state.password,
        age:this.state.age,
      };
    
    //   https://jsonplaceholder.typicode.com/users
    axios.post(`http://localhost:5000/register`, { user })
    .then(res => {
      console.log(res);
      console.log(res.data);
      alert("Successfully created");
      window.location.href="/patient"
    })
   
   
  }

  render() {
    const { errors } = this.state
    // const captchaRef = useRef(null);
    return (
      
        <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Registration</h2>
          {/* onSubmit={this.handleSubmit} */}
          <form onSubmit={this.handleSubmit} noValidate >
            <div className='email'>
                  <label htmlFor="username"> Patient Full Name</label>
                  <input type='text' name='username' onChange={this.handleChange}/>
               </div>
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
              <label htmlFor="age">Age</label>
              <input type='number' name='age' onChange={this.handleChange} />
             
            </div>
            {/* <div className='password'>
              <label htmlFor="bllodgroup">Blood Group</label>
              <input type='text' name='bloodgroup' onChange={this.handleChange} />
             
            </div> */}
            <div className='password'>
              {/* ref={captchaRef} */}
              <ReCaptacha sitekey="6LdRo_AjAAAAAKSlA996RxJ48Vo-xvDvVBrt7nSn" />
            </div>
            <div className='submit' >
              <button>Sign  </button>
            </div>
          </form>
        </div>
      </div>


 





    );







  }
}