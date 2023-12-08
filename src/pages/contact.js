import React, { useState, useContext } from 'react';
import "./contact.css";
import email from "./email.gif";
import contactgif from "./contact.gif";
import locationgif from "./lgiphy.gif";
import { UserContext } from './transaction'; 




function Contact() {
  const balance = useContext(UserContext);
  
  
  const [inputs, setInputs] = useState('');

  const Change = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    
  };

  return (
    <>
    
      <div className="content ">

      <h2> Component{ balance }</h2>


        <div className="left ">
          <div className="l1 m-1">
            <img className="lgif" src={locationgif} alt="Address" />
            <h2 className='text-info'>ADDRESS</h2>
            <h4 className='text-white'>Chinnappampatty<br />
              Edappadi(TK), Salem(DT)-6363606</h4>
          </div>

          <div className="l2 mt-5">
            <img className="l2gif" src={contactgif} alt="Phone" />
            <h2 className='text-info'>PHONE</h2>
            <h4 className='text-white'>+1800 1030</h4>
          </div>

          <div className="l3">
            <img className="l3gif" src={email } alt="Email" />
            <h2 className='text-info'>GMAIL ID</h2>
            <h4 className='text-white'>canara@gmail.com</h4>
          </div>
        </div>

         {/* contactus form start...... */}

        <div className="right">
        <form onSubmit={handleSubmit}>
            <h1 className="reg">REGISTER NOW</h1>
            <br />

            <label  htmlFor="name">NAME<i>*</i></label><br />

            <input  type="text"
            className='form-control input-type'
            name="username"
            value={inputs.username || ""}
            onChange={Change}
            placeholder='Enter Name' /><br />


            <label  htmlFor="email">EMAIL<i>*</i></label><br />

            <input  className='form-control input-type'
              type="email"
              name="email"
              value={inputs.email || ""}
              onChange={Change}
              placeholder='Enter Email'
              required autoComplete="on" /><br />

            <label  htmlFor="phone">PHONE<i>*</i></label><br />

            <input type="tel"
              className='form-control input-type'
              name='number'
              value={inputs.number || ""}
              onChange={Change}
              placeholder='Enter mobileNO'/><br />

            <label>User age:</label><br />
            <input
              className='form-control input-type'
              type="number"
              name="age"
              value={inputs.age || ""}
              onChange={Change}
              placeholder='Enter Age'/><br />

            <label  htmlFor="message">MESSAGE<i>*</i></label><br />

            <textarea    type="text"
            className='form-control input-type'
            name="username"
            value={inputs.username || ""}
            onChange={Change}
            placeholder='Enter Name'></textarea><br />

            <input  type="submit" value="SUBMIT" className=' form-control btn input-type btn-md btn-outline-dark'  />
           

          </form>
        </div>
        {/* contactus form end... */}
      </div>
    </>
  );
}

export default Contact;
