import React from 'react';
import "../css/display.css"



function Display(props){

   
return(
   

<div>
{props.list.map((name)=> (
    <div>
        
    <div className="employeee">
        <div>
        <h1>{name.name}</h1>

        </div>
        <div>
        <h1>{name.firstName}</h1>
        </div>
        <div>
        <h1>{name.surname}</h1>
        </div>
        <div>
        <h1>{name.email}</h1>

        </div>
        </div>
        </div>
        
        

        

))}



</div>



)
}

export default Display;