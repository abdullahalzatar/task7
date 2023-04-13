import "../Style/MainContent.css"
import CardRecipe from "./CardRecipe.js";
import axios from 'axios';
import * as React from "react";
import { useTable } from "react-table";
 import { Formik } from 'formik';
 import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function MainContent() {

  
  const fakeData =[
    { 
    id: "1",
    name: "Apple",
    calories: "52 Calories",
    size: "100g",
    },
    { 
      id: "2",
      name: "Banana",
      calories: "89 Calories",
      size: "100g",
      },
      { 
        id: "3",
        name: "Avocado",
        calories: "160 Calories ",
        size: "100g",
        },
        { 
          id: "4",
          name: "Coconut",
          calories: "354 Calories",
          size: "100g",
          },
          { 
            id: "5",
            name: "Almonds",
            calories: "576 Calories",
            size: "100g",
            },{ 
              id: "6",
              name: "Kaju",
              calories: "553 Calories",
              size: "100g",
              },
              { 
                id: "7",
                name: "Greek Yogurt",
                calories: "59 Calories",
                size: "100g",
                }
  
  ]

  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Food Name",
        accessor: "name",
      },
      {
        Header: "Calories",
        accessor: "calories",
      },
      {
        Header: "Size",
        accessor: "size",
      },
      
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

const [values, setValue] = React.useState()
  
React.useEffect(() => {
 axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=7aaf410a3da0448981ba295e58cd292d&number=10`)
.then((response)=> setValue(response.data.results))
.catch((err) => {console.log(err.message);});

}, []);
  
const [toggleState, setToggleState] = React.useState(1);
  

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
        <div className="contusform">
        <p className="bgcount">Diet Schedule</p>
        
        <Table sx={{ minWidth: 650  , bgcolor: "#363636"  , mt: 3, border: 1 ,borderColor: '#fff' ,borderRadius: 3  }} aria-label="simple table" {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableCell {...column.getHeaderProps()} sx={{ color: "#fff" ,fontWeight: 'bold' }} >
                    {column.render("Header")}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()}  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  {row.cells.map((cell) => (
                    <TableCell sx={{ color: "#fff"}} component="th" scope="row"  {...cell.getCellProps()}> {cell.render("Cell")} </TableCell >
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
       
        </div>

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
         } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
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

<div className="div2">
  <div className="tdinputmain">First Name
    <div>
      <input type="text" name="firstname" onChange={handleChange} onBlur={handleBlur} value={values.firstname} placeholder='EnterFirstName'/>
    </div>
  </div>
  <div className="tdtext2">
      <p className= "smallfr">{errors.firstname && touched.firstname && errors.firstname}</p>
  </div>
</div>

<div className="div3">
  <div className="tdinputmain">Last Name
    <div>
      <input type="text"  name="lastname" onChange={handleChange} onBlur={handleBlur} value={values.lastname} placeholder='EnterLastName'/>
    </div>
  </div>
  <div className="tdtext2">
    <p className= "smallfr">{errors.lastname && touched.lastname && errors.lastname}</p>
  </div> 
</div>

<div className="div4">
  <div className="tdinputmain">Email Address
    <div>
      <input type="text"  name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder='Enter Email Address'/>
    </div>
  </div>
  <div className="tdtext2">
    <p className= "smallfr">{errors.email && touched.email && errors.email}</p>
  </div>
</div>

<div className="div5">
  <div className="tdinputmain">Phone Number
    <div>
      <input type="tel"  name="phone" onChange={handleChange} onBlur={handleBlur} value={values.phone} className="phone" placeholder="50XXXXXXXX"/>
    </div>
  </div>
  <div className="tdtext2">
    <p className= "smallfr">{errors.phone && touched.phone && errors.phone}</p>
  </div>
</div>

<div className="div6">
  <div className="tdinputmain">Message Type
    <div>
      <input type="text" name="massgty" onChange={handleChange} onBlur={handleBlur} value={values.massgty} className="massgty" placeholder='Enter Message'/>
    </div>
  </div>
  <div className="tdtext2">
    <p className= "smallfr">{errors.massgty && touched.massgty && errors.massgty}</p>
  </div> 
</div>

<div className="div7">
  <div className="tdinputmain">Message 
    <div>
      <textarea name="mass" onChange={handleChange} onBlur={handleBlur} value={values.mass} placeholder='Enter Message' rows="4" className="mass"/>
    </div>
  </div>
  <div className="tdtext2">
    <p className= "smallfr">{errors.mass && touched.mass && errors.mass}</p>
  </div>
</div>

<div className="div8">
  <button className="butsum" type="submit" disabled={isSubmitting}>Send Message</button>
</div>

</div>
</form>)}
</Formik>
        </div>

        </div>

        </div> 
        </div>
    );
  }
  
  export default MainContent;
  
