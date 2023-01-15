
import React from 'react';
// { useRef }
import './style.css'
import DatePicker from 'react-datepicker';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
// import axios from 'axios';
// import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
// import {Doctor} from '../components/Doctor';

// import * as ReactDOM from 'react-dom';

interface SignUpProps {
  name?: any;
  value?: any;
}
interface SignUpState {
    patientname: string;
    reason:string;
    email: string;
    phoneNumber:string;
    selectDate :Date;
   
  errors: {
    patientname: string;
    reason:string;
    email: string;
    phoneNumber:string;
    selectDate: Date;
   
  }
}
const Regex = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i);



export class Patient extends React.Component<SignUpProps, SignUpState>{
//   datestate: { selectDate: Date; };

  constructor(props: SignUpProps) {
    super(props);
    // this.datestate = {
    //     selectDate: new Date()
    //   };
    const initialState = {
      patientname:'' ,
      reason:'',
      email: '',
      phoneNumber:'',
      selectDate: new Date(),
      errors: {
        patientname:'' ,
        reason:'',
        email: '',
        phoneNumber:'',
        selectDate: new Date(),
      }
    }
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);

  }
  onDateChange(date) {
    this.setState({
      selectDate: date
    })
  }



  handleChange = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {

      case 'patientname':
            errors.patientname = value.length < 8 ? 'Password must be eight characters long!' : '';
            break;
      case 'email':
        errors.email = Regex.test(value) ? value : 'Email is not valid!';
        break;
    
      default:
        break;
    }
    this.setState(Object.assign(this.state, { errors, [name]: value }));
    console.log(this.state.errors);
  }


//   onDateChange(date) {
//     this.setState({
      
//     })
//   }
  handleSubmit = (event: any) => {

    // var user = {
    
    //   email:this.state.email,
    //   password:this.state.password,

    // };
  
    event.preventDefault();
    alert("Booking Successfull on date ");
    window.location.href="/home"
    
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
          <h2>Book Appointment</h2>

          <form onSubmit={this.handleSubmit} noValidate >
         
          <div className='password'>
              <label htmlFor="patientname">Name</label>
              <input type='patientname' name='patientname' onChange={this.handleChange} />
          
            </div>

            <div className='password'>
              <label htmlFor="reason">Reason for Visit</label>
              <input type='reason' name='reason' onChange={this.handleChange} />
            
            </div>
          <div className='email'>
              <label htmlFor="email">Email Adress</label>
              <input type='email' name='email' onChange={this.handleChange} />
              {errors.email.length > 0 && <span style={{ color: "red" }}>{errors.email}</span>}
            </div>
            <div className='email'>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type='phoneNumber' name='phoneNumber' onChange={this.handleChange} />
            
            </div>
            <DatePicker
                    className="form-control"
                    selected={ this.state.selectDate }
                    onChange={ this.onDateChange }
                    name="selectedDate"
                    showTimeSelect
                    timeIntervals={30}
                    timeFormat="HH:mm"
                    timeCaption="time"
                    dateFormat="MMMM d, yyyy h:mm aa"
                />
           
          
            <div className='submit' >
              <button>Sign In</button>
            </div>
          </form>
        </div>
      </div>








    );







  }
}