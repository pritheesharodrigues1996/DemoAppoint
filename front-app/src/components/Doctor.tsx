// import { Modal } from '@material-ui/core';
import React from 'react';
// import reminder from '../assests/images/reminder.jpeg';
// import { Link } from 'react-router-dom';
import Modal from './Modal'
export class Doctor extends React.Component<{}, {show:boolean}>{

    constructor(props:any) {
     
        super(props);
        this.state = {    
          show: false
        };


        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
      }

    
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

    
  render() {
      
    return(
    
    <div className='wrapper'>
    <div className='box-wrapper'>
    {/* <img src={reminder}> </img> */}
    <div>
       <img width={200} height={200} src={require('../assests/images/reminder.jpeg')} alt="Test" />
       </div>
    {/* <button ><Link  className="Link" to="/Appointment">Check Appointment</Link></button> */}
    <button type="button" onClick={this.showModal} > Check Appointment</button>
    <Modal show={this.state.show} handleClose={this.hideModal}>
        
        </Modal>
   
    </div>
    </div>
    
    


    );


  }





} 