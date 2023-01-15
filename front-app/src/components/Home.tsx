import React from 'react';

import { Link } from 'react-router-dom';
import './style.css'
export class Home extends React.Component {

    render() {
        
        return (
            <div className='wrapper'>
                <div className='box-wrapper'>
                    <h2>Appointment System</h2>
                    <div className='submit' >
                        <button ><Link  className="Link" to="/signup">Doctor</Link></button>
                        <button><Link className="Link" to="/admin">Admin</Link></button>
                        <button><Link className="Link" to="/registration">Patient</Link></button>
                     
                    </div>

                </div>


            </div>

        );


    }





} 