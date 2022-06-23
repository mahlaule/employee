import "../css/add.css"
import React, {useState} from 'react';
function AddItem (props){
    const[name, setName]= useState('');
    const[firstName, setFirstName]= useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
 

   const add =(()=>{

    console.log(name);
    console.log(firstName);
    console.log(surname);
    console.log(email);
props.add(name,firstName,surname,email);
   })

   
 
   

        
       
 
     
  
    
  
    
return(


    <div  className="container">

        <h1>new employee</h1>

<input  placeholder="enter name" onChange={(e)=>setName(e.target.value)}/><br></br>
<input  placeholder="enter firstName" onChange={(e)=>setFirstName(e.target.value)}/><br></br>
<input placeholder="enter Surname" onChange={(e)=>setSurname(e.target.value)}/><br></br>
<input placeholder="enter email"  onChange={(e)=> setEmail(e.target.value)}/><br></br>


<button id="btn"onClick={add}>add employee</button>
<button id="btn">update</button>
<button id ="btn">delete</button>


      </div>
    
        

);
}
    




export default AddItem