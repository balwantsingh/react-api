import React,{useState } from 'react'

function Contact(props)
 {
    const [val,setVal]=useState("Paru")
     const test = (e)=>
     {
         
         console.warn("test function" , e.target.value)
         setVal(e.target.value)
     }

    return (
        <div className="container">
            <h1 className="text-success display-4 font-weight-bold">Contact us</h1>
            <p>We provide online software products (Job Board Software, CRM Software, Auto / car classifieds, Real Estate listing, Applicant tracking software etc) and website design and programming services that cover the entire spectrum of web development.
To request additional information, please contact us or fill in the form below.
Note: All items on the form marked with ‘ * ‘ are compulsory.

Your Name (required)</p>
            <input type="text" value={val} onChange={test} />
            <button onClick={()=>alert(val)}>
            Click me
            </button>
        </div>
        
    )
}

export default Contact;

