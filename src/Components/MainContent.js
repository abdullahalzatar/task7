import "../Style/MainContent.css"
import markx from "../Assets/Default.svg";
import mark from "../Assets/mark.svg";
import CardRecipe from "./CardRecipe.js";
import { useState,useEffect } from "react";

function MainContent() {
  
 const username = document.getElementsByClassName("firstname");
const lastname = document.getElementsByClassName("lastname");
const email = document.getElementsByClassName("email");
const phone = document.getElementsByClassName("phone");
const massgty = document.getElementsByClassName("massgty");
const mass = document.getElementsByClassName("mass");

const [values, setValue] = useState()
  
useEffect(() => {
  fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=7aaf410a3da0448981ba295e58cd292d&number=10`)
   .then((response) => response.json())
   .then((actualData) => setValue(actualData.results))
   .catch((err) => {
    console.log(err.message);
   });
 }, []);
 
 console.log(values);
 
    const [toggleState, setToggleState] = useState(1);
    const [toggle2State, setToggle2State] = useState(1);
    const [toggle3State, setToggle3State] = useState(1);
    const [toggle4State, setToggle4State] = useState(1);
    const [toggle5State, setToggle5State] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const toggle2Tab = (index) => {
    setToggle2State(index);
  };

  const toggle3Tab = (index) => {
    setToggle3State(index);
  };

  const toggle4Tab = (index) => {
    setToggle4State(index);
  };

  const toggle5Tab = (index) => {
    setToggle5State(index);
  };
  const  handleSubmit = async (e)=> {
    e.preventDefault();
    
    if (username[0].value === "") {
        
         toggle2Tab(2);
         toggle3Tab(2);
         toggle4Tab(2);
         toggle5Tab(2);

      } else { 
       
        toggle2Tab(1);
        toggle3Tab(1);
       

        if(lastname[0].value === ""){
            toggle2Tab(3);
            toggle3Tab(3);
            toggle4Tab(2);
            toggle5Tab(2);
        
         } else { 
       
        toggle2Tab(1);
        toggle3Tab(1);
        

           if(email[0].value === ""){
            toggle2Tab(4);
            toggle3Tab(4);
            toggle4Tab(2);
            toggle5Tab(2);
        
             } else { 
       
            toggle2Tab(1);
            toggle3Tab(1);
           

            if(phone[0].value === ""){
                toggle2Tab(5);
                toggle3Tab(5);
                toggle4Tab(2);
               toggle5Tab(2);
            
             } else { 
           
            toggle2Tab(1);
            toggle3Tab(1);
            

            if(massgty[0].value === ""){
                toggle2Tab(6);
                toggle3Tab(6);
                toggle4Tab(2);
                toggle5Tab(2);
            
             } else { 
           
            toggle2Tab(1);
            toggle3Tab(1);
         

            if(mass[0].value === ""){
                toggle2Tab(7);
                toggle3Tab(7);
                toggle4Tab(2);
                toggle5Tab(2);
            
             } else { 
            
            toggle2Tab(1);
            toggle3Tab(1);
            toggle4Tab(2);
            toggle5Tab(1);
           
            }
            }
            }
            }
        }
      }
   
  } 

 

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
            
          <form className="counfrom" onSubmit={handleSubmit}>
            <div>
            <div className="parent">
<div className="maincoun"></div>
<div className="div2"><div className={toggle2State === 2 ? "errormain" :"tdinputmain" }>First Name<div><input type="text" className="firstname" placeholder='EnterFirstName'></input ></div></div><div className="tdtext2"><p className={toggle3State === 2 ? "smallfr": "smallfrn"  }>This fieldis required</p></div> </div>
<div className="div3"><div className={toggle2State === 3 ? "errormain" :"tdinputmain" }>Last Name<div><input type="text" className="lastname" placeholder='EnterLastName'></input ></div></div><div className="tdtext2"><p className={toggle3State === 3 ? "smallfr": "smallfrn"  }> This fieldis required</p></div> </div>
<div className="div4"><div className={toggle2State === 4 ? "errormain" :"tdinputmain" }>Email Address<div><input type="text" className="email" placeholder='Enter Email Address'></input ></div></div><div className="tdtext2"><p className={toggle3State === 4 ? "smallfr": "smallfrn"  }> This fieldis required</p></div>  </div>
<div className="div5"><div className={toggle2State === 5 ? "errormain" :"tdinputmain" }>Phone Number<div><input type="tel" className="phone" placeholder="50XXXXXXXX"></input ></div></div><div className="tdtext2"><p className={toggle3State === 5 ? "smallfr": "smallfrn"  }> This fieldis required</p></div></div>
<div className="div6"><div className={toggle2State === 6 ? "errormain" :"tdinputmain" }>Message Type<div><input type="text" className="massgty" placeholder='Enter Message'></input ></div></div><div className="tdtext2"><p className={toggle3State === 6 ? "smallfr": "smallfrn"  }> This fieldis required</p></div>  </div>
<div className="div7"><div className={toggle2State === 7 ? "errormain" :"tdinputmain" }>Message <div><textarea placeholder='Enter Message' rows="4" className="mass"></textarea></div></div><div className="tdtext2"><p className={toggle3State === 7? "smallfr": "smallfrn"  }> This fieldis required</p></div>  </div>

<div className="div8"><div className="maindivbut">
    <div>
<button className="butsum" type="submit">Send Message</button>
</div>
<div className={toggle4State === 1? "tdinputmass1n": "tdinputmass1"}><div className="imgtdi" ><img src={toggle5State === 1? mark: markx} ></img></div><div> <i className={toggle5State === 1? "errortext": "susses"}>Your message has been sent successfully. We will get back to you soon.</i> <i className={toggle5State === 1? "susses":"errortext" } style={{color: "#9D0D2D"}}>An error occurred while sending your message. Please try again.</i></div></div>
</div></div>


</div>
            </div>


          </form>


          </div>

        </div>

        </div> 
        </div>
  

 
    );
  }
  
  export default MainContent;
  
