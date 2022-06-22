
import React from "react"


function Display(props){
return(

<div>
{props.list.map((name)=> {
    <div>

    <div className="employeee">
        <h1>{name.name}</h1>
        <h2>{name.firstName}</h2>
        <h1>{name.surname}</h1>
        <h1>{name.email}</h1>
        </div>

        </div>



})}

</div>



)
}

export default Display;