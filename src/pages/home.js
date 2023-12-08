import React, { useState,createContext, useContext } from 'react';
import banner1 from "../banner1.webp";
 import banner2 from "../banner2.webp";
 import banner3 from "../banner3.webp";
 import banner4 from "../banner4.webp";
 import banner5 from "../banner5.webp";
 import home from "./homeimg.png";
 import car from "./carimg.png";
 import ring from "./ringimg.png";
 import graduate from "./graduateimg.png";
 import searchico from "./search.png";
 import intrest from "./intrest.png";
 import  paper from "./paper.png";
 import  rupess from "./rupees.png";
 import  portal from "./portal.png";
 import  dicgc from "./dicgc.png";
 import  digitalbanking from "./digitalbanking.png";
 import  location from "./location.png";
 import  volume from "./volume.webp";
 import  branch from "./branch.webp";
//  social media icon start
import  facebook from "./facebook.png";
import  linked from "./linkedin.png";
import  twitter from "./twitter.png";
import  youtube from "./youtube.png";
import  pinterst from "./pinterest.png";
import  instagram from "./instagram.png";
import  threads from "./threads.png";
// social media icon end


import './home.css';

const UserContext = createContext();

const UserComponent = () => {
  const user = useContext(UserContext);
  return <h1>{user}</h1>;
};

 function Home() {
  const [user, setUser] = useState("This is Homepage");


  return(
< >
<UserContext.Provider value={user}>
<UserComponent />

 {/* banner start */}

 
<div id="demo" className="carousel slide  banner" data-bs-ride="carousel">

    <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={banner1}  className="d-block " style={{width:"100%",height:"400px"}}/>
    </div>
    <div className="carousel-item">
      <img src={banner2} className="d-block" style={{width:"100%",height:"400px"}}/>
    </div>
    <div className="carousel-item">
      <img src={banner3}  className="d-block" style={{width:"100%",height:"400px"}}/>
    </div>
    <div className="carousel-item">
      <img src={banner4}  className="d-block" style={{width:"100%",height:"400px"}}/>
    </div>
    <div className="carousel-item">
      <img src={banner5}  className="d-block" style={{width:"100%",height:"400px"}}/>
    </div>
  </div>
  
  {/* -- Left and right controls/icons -- */}
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span className="material-symbols-outlined text-dark" style={{fontSize:"90px"}}>arrow_circle_left</span>
  </button>

  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span className="material-symbols-outlined  text-dark" style={{fontSize:"90px"}}>arrow_circle_right</span>
  </button>
</div>
 {/* banner end */}
 



 <div className="container-fluid bannerbottom-nav " >
 <ul className="bannerbottom-nav-text" style={{fontWeight:"bold",padding:"40px 0px 0px 5px"}}>
<li >CORPORATE BANKING</li>|
<li>MSME BANKING</li>|
<li>PRIORITY PORTAL</li>|
<li>TENDERS</li>|
<li>E-AUCTION</li>|
<li>eOTS (Online One Time Settlement)</li>
<li> <div className="bg-warning  bannerbottom-btn" >

<div className="pt-2 bannerbottom-btn1">
     <h6 style={{fontWeight:"bold"}}>WHAT’S NEW</h6>
    </div>
</div>          
</li>
</ul>
 </div>
 
  <div style={{width:"100%",backgroundColor:"#F7F7F7"}}>
  
  <div className='col-sm-4 pt-5'style={{float:"left",height:"350px",position:"relative"}}>
    <span style={{fontSize:"50px",marginLeft:"80px"}}>INSTANT </span>
    <span style={{fontSize:"50px",marginLeft:"3em", position:"absolute",top:"2em",left:"1em"}}>LOAN </span><br />
  <h2  style={{fontSize:"55px",marginLeft:"50px",position:"absolute",top:"3em",left:"0em",color:"#EA5607"}}>APPROVALS</h2></div>
  
  <div className='col-sm-8 row' style={{height:"350px"}}>
  
   <div className="homeloan col-sm-3  " >
      
     <span className="material-symbols-outlined " style={{fontSize:"40px",fontWeight:"bold"}}>chevron_left</span>
      <img src={home} className='loanimg'/>
      <button type="button" className="btn btn-warning mt-4 loanbtn" >canara</button> 
      <h4 className='h4'>HOME LOAN</h4><br />
      <h5>8.40%</h5>
      <h5>p.a.*</h5> 
      </div>


<div className="homeloan col-sm-3 " >
<img src={car} className='loanimg'/><br />
      <button type="button" className="btn btn-warning mt-4 loanbtn" >canara</button> 
      <h4 className='h4'>CAR LOAN</h4><br />
      <h5>8.70%</h5>
      <h5>p.a.*</h5> 
</div>

 <div className="homeloan col-sm-3 " >
 <img src={ring} className='loanimg'/><br />
      <button type="button" className="btn btn-warning mt-4 loanbtn" >canara</button> 
      <h4 className='h4'>GOLD LOAN</h4><br />
      <h5>8.75%</h5>
      <h5>p.a.*</h5> 
  </div> 

<div className="homeloan col-sm-3 " >
<div>
<img src={graduate} className='loanimg'/>
<span class="material-symbols-outlined" style={{fontSize:"39px",fontWeight:"bold"}}>chevron_right</span></div>
      <button type="button" className="btn btn-warning mt-4 loanbtn" >canara</button> 
      <h4 className='h4'>EDUCATION LOAN</h4>
      <h5>8.60%</h5>
      <h5>p.a.*</h5> 
  </div> 
 </div>

  <div className='container-fluid  p-3'style={{height:"80px",backgroundColor:"#F7F7F7"}}>
    <div className='fieldbacks bg-warning'>
    <div className='fieldbackss p-1 text-white'> <h6 style={{display:"inline",fontWeight:"bold"}}>KNOW MORE</h6>
    <span><img src={searchico} style={{height:"40px",textAlign:"right",marginLeft:"25px"}}/></span></div>
    </div>
  </div>

</div>
  <div className='container-fluid '>
  <div className='row slidelink '>
    <div className='col-md-1 'style={{paddingTop:"80px"}}>
      <span className="material-symbols-outlined" style={{fontSize:"90px",fontWeight:"bold"}}>chevron_left</span>
      </div>

     <div className='col-md-2  pt-2'><img src={intrest}/> <br />
     <h3 className='slidetext mt-2'>RATE OF <br/> INTEREST</h3></div>

     <div className='col-md-2  pt-2'><img src={paper}/><br />
     <h3 className='mt-2 slidetext'> GST INVOICE PORTAL</h3></div>

     <div className='col-md-2  pt-2'><img src={rupess}/> <br />
     <h3 className='mt-2 slidetext'>SERVICES <br/> CHARGES</h3></div>

     <div className='col-md-2  pt-2'><img src={portal}/><br />
     <h3 className='mt-2 slidetext'>Jansamarth Portal</h3></div>

     <div className='col-md-2  pt-2'><img src={dicgc}/><br />
     <h3 className='mt-2 slidetext'>DICGC</h3></div>

    <div className='col-md-1 'style={{paddingTop:"80px"}} >
      <span class="material-symbols-outlined"style={{fontSize:"90px",fontWeight:"bold"}}>chevron_right</span>
      </div>
   
    </div>
    </div>
    <div className=' bg-primary'>
     
        <img src={digitalbanking} className='digitalbanking'/>
      
    </div>
    <div className='offers row'>
      <div className='col-md-5  pt-4 offercol1'>
        <div className='exclusivetext'>EXCLUSIVE</div><br />
        <div className='offertext'>OFFERS</div>

        <div className=" offerpage" >
          <div className=" mt-5 offerpagetext pt-2" >
          <h4 style={{fontWeight:"900",textAlign:"center"}}><a href=''>MASTER CARD</a></h4>
          </div>
        </div>

        <div className=" offerpage" style={{marginLeft:"80px"}} >
          <div className=" mt-5 offerpagetext pt-2" >
          <h4 style={{fontWeight:"900",textAlign:"center"}}><a href=''>RUPAY CARDS</a></h4>
          </div>
        </div>

        <div className=" offerpage"style={{marginLeft:"140px"}} >
          <div className=" mt-5 offerpagetext pt-2" >
          <h4 style={{fontWeight:"900",textAlign:"center"}}><a href=''>VISA CARDS</a></h4>
          </div>
        </div>

        <div className=" offerpage4" style={{marginLeft:"150px"}} >
          <div className=" mt-5 offerpagetext4 pt-2" >
          <h3 style={{fontWeight:"900",textAlign:"center"}}><a href=''>CREDIT CARD OFFER</a></h3>
          </div>
        </div>
      </div>
    
     <div className='col-md-7 offersimg'></div> 
    </div>

    <div className='  location'>
      <div className=' container-fluid location-subdiv'>
      <div className='row'>
      <div className='col-md-6 'style={{height:"330px",textAlign:"center"}}>
        <h2 style={{fontSize:'40px',marginTop:"100px"}}>Cyber Security Awareness</h2><br />
          
   
    <div className='fieldbacks '>
    <div className='fieldbackss p-1 text-white'> 
    <h6 style={{display:"inline",fontWeight:"bold"}}><a href=''>KNOW MORE</a></h6>
    <span><a href=''><img src={searchico} style={{height:"40px",marginLeft:"25px"}}/></a></span></div>
    </div>
     
          </div>

        <div className='col-md-6'style={{height:"330px"}}></div>
          <img src={volume}className='volume'/>
        </div>
      </div>

       <div className='branchloacation row'>
        <div className='col-md-4 bg-dar'>
          <div class="branch-locator-left ">
            <h2 className='text-info' style={{fontSize:'60px',marginTop:"50px",marginLeft:"60px"}}>Branch</h2>
            <h3 style={{fontSize:'80px',marginLeft:"100px"}}className='locatortext'>Locator</h3>
            </div>
            </div>
        <div className='col-md-8 locator-img pt-5' ><a href=''><img src={branch} style={{height:"350px",width:"90%"}} /></a></div>
       </div>
    
    </div>
    <div  className=' social-media p-1'>
       <ul>
           <li className=' social-media-text'>CONNECT WITH US :</li>
           <li><a href=''><img src={ facebook } className='socialicon' /></a></li>
           <li><a href=''><img src={linked} className='socialicon'/></a></li>
           <li><a href=''><img src={ twitter} className='socialicon'/></a></li>
           <li><a href=''><img src={ youtube} className='socialicon'/></a></li>
           <li><a href=''><img src={ pinterst} className='socialicon'/></a></li>
           <li><a href=''><img src={instagram} className='socialicon'/></a></li>
           <li><a href=''><img src={threads} className='socialicon'/></a></li>
        </ul>
       </div>
    
       </UserContext.Provider>
</>
  );
 }

export default Home;
