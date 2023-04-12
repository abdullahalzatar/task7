import "../Style/MainContent.css"
import markx from "../Assets/Default.svg";
import mark from "../Assets/mark.svg";
import CardRecipe from "./CardRecipe.js";
import { useState,useEffect } from "react";
import axios from 'axios';
 import { Formik } from 'formik';

function MainContent() {
  
 const username = document.getElementsByClassName("firstname");
const lastname = document.getElementsByClassName("lastname");
const email = document.getElementsByClassName("email");
const phone = document.getElementsByClassName("phone");
const massgty = document.getElementsByClassName("massgty");
const mass = document.getElementsByClassName("mass");

const [values, setValue] = useState()
  
useEffect(() => {

 axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=7aaf410a3da0448981ba295e58cd292d&number=10`)
.then((response)=> setValue(response.data.results))
.catch((err) => {console.log(err.message);});

}, []);
  
    const [toggleState, setToggleState] = useState(1);
  

  const toggleTab = (index) => {
    setToggleState(index);
  };

 

    return (      
        <div className="contactus"> 
    <div className="headercou">
    <div className="navbarcou">
      <div onClick={() => toggleTab(1)} className={toggleState === 1 ? "tabson" : "tabsoff"}>Recipe</div>
      <div onClick={() => toggleTab(2)} className={toggleState === 2 ? "tabson" : "tabsoff"}>Diet Schedule</div>
      <div onClick={() => toggleTab(3)} className={toggleState === 3 ? "tabson" : "tabsoff"}>Frequently Asked Questions</div>
      <div onClick={() => toggleTab(4)} className={toggleState === 4 ? "tabson" : "tabsoff"}>Contact us</div>
      
    </div>
  </div>
   <div className="content-tabs">
    
        <div className={toggleState === 1 ? "content  active-content" : "content"}>
        <div className="CardRecipediv">
        {values &&
        values.map((value) => (
          <div>
            <CardRecipe value={value}/>
          </div>
        ))}
         
          </div>
        </div>

        <div className={toggleState === 2 ? "content  active-content" : "content"}>
        </div>

        <div className={toggleState === 3 ? "content  active-content" : "content"}>
        
        </div>

        <div className={toggleState === 4 ? "content  active-content" : "content"}>
        <div className="contusform">
        <p className="bgcount">Contact us</p>
        <p className="smcount">Send us a message, complaint or inquiry by filling the contact form below.</p>
        <Formik
       initialValues={{ firstname: '', lastname: '', email: '', phone: '', massgty: '', mass: ''}}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         if(!values.firstname){
          errors.firstname = 'Required';
         }
         if(!values.lastname){
          errors.lastname = 'Required';
         }
         if(!values.phone){
          errors.phone = 'Required';
         }
         if(!values.massgty){
          errors.massgty = 'Required';
         }
         if(!values.mass){
          errors.mass = 'Required';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
          <div className="parent">

<div className="div2"><div className="tdinputmain">First Name<div><input type="text" name="firstname" onChange={handleChange} onBlur={handleBlur} value={values.firstname} className="firstname" placeholder='EnterFirstName'></input ></div></div><div className="tdtext2"><p className= "smallfr">{errors.firstname && touched.firstname && errors.firstname}</p></div> </div>
<div className="div3"><div className="tdinputmain">Last Name<div><input type="text"  name="lastname" onChange={handleChange} onBlur={handleBlur} value={values.lastname} className="lastname" placeholder='EnterLastName'></input ></div></div><div className="tdtext2"><p className= "smallfr">{errors.lastname && touched.lastname && errors.lastname}</p></div> </div>
<div className="div4"><div className="tdinputmain">Email Address<div><input type="text"  name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} className="email" placeholder='Enter Email Address'></input ></div></div><div className="tdtext2"><p className= "smallfr">{errors.email && touched.email && errors.email}</p></div>  </div>
<div className="div5"><div className="tdinputmain">Phone Number<div><input type="tel"  name="phone" onChange={handleChange} onBlur={handleBlur} value={values.phone} className="phone" placeholder="50XXXXXXXX"></input ></div></div><div className="tdtext2"><p className= "smallfr">{errors.phone && touched.phone && errors.phone}</p></div></div>
<div className="div6"><div className="tdinputmain">Message Type<div><input type="text" name="massgty" onChange={handleChange} onBlur={handleBlur} value={values.massgty} className="massgty" placeholder='Enter Message'></input ></div></div><div className="tdtext2"><p className= "smallfr">{errors.massgty && touched.massgty && errors.massgty}</p></div>  </div>
<div className="div7"><div className="tdinputmain">Message <div><textarea name="mass" onChange={handleChange} onBlur={handleBlur} value={values.mass} placeholder='Enter Message' rows="4" className="mass"></textarea></div></div><div className="tdtext2"><p className= "smallfr">{errors.mass && touched.mass && errors.mass}</p></div>  </div>
<div className="div8"><button className="butsum" type="submit" disabled={isSubmitting}>Send Message</button></div>
</div>

         </form>
       )}
     </Formik>
        </div>

        </div>

        </div> 
        </div>
  

 
    );
  }
  
  export default MainContent;
  
