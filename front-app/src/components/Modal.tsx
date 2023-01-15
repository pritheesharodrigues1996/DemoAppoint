import './modal.css';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
      {/* <div  className="col-md-7 col-lg-8 col-xl-9"> */}
      <div className='columnWise' >
       <div className="card">
        <div className="pro-widget-content">
        <div className="profile-info-widgett">
        <img className='booking-doc-img' src={require('../assests/images/doctor.jpeg')} alt="Test" />
         <div className='.profile-det-info'></div>
         <h3> Dr. Francis Andrew</h3>
         <h5><i>BDS, MDS - Oral & Maxillofacial Surgeon</i></h5>
        </div>
        <div className='patient-info'>
        {/* <ul>
        <li> Phone <span> 0506583985</span> </li>
        <li> Adress<span> Dubai</span></li>
        <li>Consultaion Fee<span> 500 AED</span></li>
        <li>Timings<span> MON-SAT 9:00 AM- 10PM</span></li>
        </ul>
        <ul> */}
        <div className='close'>
          <button onClick={handleClose}> Close</button>
          </div> 
        {/* </ul> */}
        </div>
        </div>
      
       </div>


        <div className="appointments">
        <div className="appointment-list">
        <div className='columnWise'>
        <div>
        <img className='booking-doc-img' src={require('../assests/images/patient1.jpeg')} alt="Test" />
        </div>
        <div className='patients'>
          <h5>Patient Name: Jenna</h5>
          <h5>Age: 28 </h5>
          <h5>BllodGroup: B+ve </h5>
        </div>
        <div className='buttonspacing'>
        <button onClick={handleClose}> Accept</button>
        </div>
        <div className='buttonspacing'>
        <button onClick={handleClose}> Reject</button>
        </div>
        <div className='buttonspacing'>
        <button onClick={handleClose}> Email</button>
        </div>
        </div>
        </div>
        <div className="appointment-list">
        <div className='columnWise'>
         <div>
         <img className='booking-doc-img' src={require('../assests/images/patient2.jpeg')} alt="Test" />
         </div>
         <div  className='patients' >
         <h5>Patient Id: Charles</h5>
          <h5>Age: 30 </h5>
          <h5>BllodGroup: AB+ve </h5>
         </div>
         <div className='buttonspacing'>
         <button  onClick={handleClose}> Accept</button>
         </div>
         <div  className='buttonspacing'>
         <button onClick={handleClose}> Reject</button>
         </div>
         <div className='buttonspacing'>
        <button onClick={handleClose}> Email</button>
        </div>
         </div>
        </div>
        <div className="appointment-list">
        <div className='columnWise'>
         <div>
         <img className='booking-doc-img' src={require('../assests/images/patient3.jpeg')} alt="Test" />
         </div>
         <div>
         <h5>Patient Id: Kiara</h5>
          <h5>Age: 20 </h5>
          <h5>BllodGroup: O-ve </h5>
         </div>
         <div className='buttonspacing'>
        <button   onClick={handleClose}> Accept</button>
         </div>
         <div className='buttonspacing'>
        <button  onClick={handleClose}> Reject</button>
         </div>
         <div className='buttonspacing'>
        <button onClick={handleClose}> Email</button>
        </div>
         </div>
        </div>

          </div> 
        </div>     
        
      
      </section>
     
    </div>
  );
};
export default Modal;