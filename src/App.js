import { Outlet, Link } from "react-router-dom";
import navblue from "./bluebar.png";
import canara from "./canaralogo.webp";
import yellow from "./yellowbar.Webp";
import seico from "./seico.png";
import speaker from "./speaker.png";
import mode from "./mode.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import React, { useState } from 'react';

const App = () => {

 
  return (
    <>
        <header className="text-white sticky-top">
        <div className="bluebartop">
        <span className="text-white pt-1">Text Size: A+ A  A- | Color Theme: </span>
       
        <img src={mode} style={{height:"40px"}}/> 
        <span className="mt-">Screen Reader:<img src={speaker} style={{height:"35px"}}/></span>
        </div>
        <img src={navblue} className="bluebar"/>
         
        <div className="postion1 row">
          <div className="col-sm-3  "style={{height:"100px",paddingLeft:"40px"}}><h5 className="text-white mt-1">Available in : 
          
          <button className="rounded bg-warning mt-1 text-dark"style={{border:"1px solid yellow"}}><bold>Hindi</bold></button></h5>
           
           <div className="bg-dark fieldback" >
          
          <div className=" mt-4 field" >
          
          <input type="search" className="bg-white fieldinput" />
          
          <img src={seico} style={{height:"35px",textAlign:"right",marginBottom:"3px" }}/>
        </div>
        </div>
          </div>


          <div className="col-sm-7 bg-dar  text-white" style={{textAlign:"center"}}><img className="cblogo mt-3" src={canara}/>
             <h6>ABOUT US | CUSTOMER FEEDBACK</h6></div>
          <div className="col-sm-2 " style={{height:"100px"}}>
          <h3><span className="material-symbols-outlined p-2" style={{fontSize:"30px",textAlign:"center"}}>phone_in_talk</span>1800 1030</h3>
           <h2 style={{fontSize:"25px",textAlign:"center"}}>Contact Us</h2>
          </div>  
        </div>
         
         <nav className="container mt-1 text-dark dropdown" style={{height:"50px",textAlign:"center",fontWeight:"bold"}}>
            <ul className=""> 
           
            <li><Link to="/" className="pages ">HOME</Link></li> 
            <li><Link to="/transaction" className="pages">TRANSACTION</Link></li>
           <li><Link to="/contact" className="pages">CONTACT</Link></li>
           <li ><Link to="/" className="pages">DIGITAL PRODUCTS</Link></li>
           <li><Link to="/" className="pages">INVESTOR RELATION</Link></li>
           <li><Link to="/" className="pages">NRI BANKING</Link></li>
           </ul>  

         </nav>
          <img src={yellow} className="yellow"/>

      </header>
      <Outlet />

      <div class="pt-5 " style={{backgroundColor:"#13a8e1",color:"white", width:"100%"}}>
  <div class="row">
    <div class="col-sm-3">
      <ul>
  <p className="loan1">QUICK ACCESS</p>
<li className="footer">CAREERS</li><br/>
<li className="footer">CUSTOMER EDUCATION</li><br/>
<li className="footer">EX-EMPLOYEE</li><br/>
<li className="footer">ANNOUNCEMENTS</li><br/>
<li className="footer">FOREX CARD RATES</li><br/>
<li className="footer">VACANT LOCKERS</li><br/>
<li className="footer">PENSIONERS PORTAL</li><br/>
<li className="footer">CALENDAR</li><br/>
<li className="footer">APR CALCULATOR</li><br/>
<li className="footer">PHOTO GALLERY</li><br/> 
<p className="loan1">ESG</p>
<li className="footer">ESG STATEMENT</li><br/>
<li className="footer">GREEN DEPOSIT POLICY & LENDING FRAMEWORK</li><br/>
</ul>
    </div>
    <div class="col-sm-3">
 <p className="loan1">CUSTOMER SERVICES</p>
 <li className="footer">COMPLAINTS</li><br/>
 <li className="footer">ANCILLARY SERVICES</li><br/>
 <li className="footer">DOWNLOAD CENTER</li><br/>
 <li className="footer">OFFICIAL LANGUAGE</li><br/>
 <li className="footer">DOORSTEP BANKING SERVICES</li><br/>
 <li className="footer">UNCLAIMED DEPOSIT</li><br/>
 <li className="footer">DO NOT CALL REGISTRY</li><br/>
 <li className="footer">CORPORATE SOCIAL RESPONSIBILITIES </li><br/>
 <li className="footer">SCREEN READER ACCESSIBILITY</li><br/>
 <li className="footer">BROWSER COMPATIBILITY</li><br/>
 <li className="footer">NRI AND CONSULTANCY SERVICES</li><br/>
 <li className="footer">ENROLL AS A DIRECT SELLING AGENT APPLY </li><br/>
 <li className="footer">LINKING OF AADHAAR WITH PAN</li><br/>
    </div>
    <div class="col-sm-3">
    <p className="loan1"> COMPLIANCE</p>
    <li className="footer">RTI ACT</li><br/>
    <li className="footer">REGULATIONS</li><br/>
    <li className="footer">REGULATORY DISCLOSURES</li><br/>
    <li className="footer">DISCLAIMER</li><br/>
    <p className="loan1">IMPORTANT LINKS</p>
    <li className="footer">RBI KEHTA HAI</li><br/>
    <li className="footer">RBI MONETARY MUSEUM</li><br/>
    <li className="footer">GENERAL INFORMATION ABOUT </li><br/>
    <li className="footer">PRADHAN MANTRI JAN DHAN YOJANA</li><br/>
    <li className="footer">INTEGRITY PLEDGES</li><br/>
    <li className="footer">OTHER LINKS</li><br/>
    <li className="footer">E-VOTING</li><br/>
    <li className="footer">E SYNDICATE BANK DP DETAILS</li><br/>
    </div>
    <div class="col-sm-3">
    <p className="loan1"> ONLINE SERVICES</p>
    <li className="footer">PRE-FILLED APPLICATIONS FOR RETAIL LOAN PRODUCTS</li><br/>
    <li className="footer">DOWNLOAD TDS CERTIFICATE FORM 16 A</li><br/>
    <li className="footer">GST INVOICE PORTAL</li><br/>
    <li className="footer">CANARA E TAX</li><br/>
    <li className="footer">NACH E MANDATE</li><br/>
    <li className="footer">CCIL FX RETAIL PLATFORM</li><br/>
    <li className="footer">ONLINE SERVICE REQUESTS</li><br/>
    <li className="footer">ONLINE DISPUTE RESOLUTION PORTAL</li><br/>
    <li className="footer">INTERNATIONAL SERVICES</li><br/>
    <li className="footer">E - BIKRAY</li><br/>
    <li className="footer">CANBANK FEE COUNTER</li><br/>
    </div>
  </div>
  <div className=" container-fluid " style={{textAlign:"center",height:"60px"}}>
    <p>SITEMAP | TERMS AND CONDITIONS | COPYRIGHT POLICY | WEBSITE SECURITY POLICY | PRIVACY POLICY | T&C WHATSAPP BANKING</p>
  </div>

<div className="container-fluid bg-white text-dark" style={{height:"30px",fontWeight:"bold",textAlign:"center"}}>
  <p>NSE   395.90 <span class="material-symbols-outlined">cloud_upload</span> 
  +1.56%     BSE 396.70<span class="material-symbols-outlined">cloud_upload</span>
+1.76%   As on 28/11/2023 11:59 AM  (Updates at every 15 mins)</p>
</div>
</div>
<div className="container-fluid" >
<div class="row pt-4" style={{backgroundColor:"#fecc00",textAlign:"center",color:"#0091ae",fontFamily:"sans-serif",height:"50px"}}>
<div className="col-sm-4 copyright">© 2023, Canara Bank, All rights reserved</div>
<div className="col-sm-4 copyright">Last updated on 27-11-2023 4:29 PM</div>
<div className="col-sm-4 copyright">Powered By PECS</div>
</div>
</div>
    </>
  )
};

export default App;