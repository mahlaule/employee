import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import AddItem from './components/addItem';
import Display from './components/display';
import { ReactDOM } from 'react';


function App() {


  



  const [addingItems, setAddingItems] = useState([]);
  const addEmployee = ((name,firstName,surname,email)=>{
    

    setAddingItems((namess)=> [...name,{

      name:name,
      firsName:firstName,
      surname:surname,
      email:email

    }])


console.log(addingItems);
  })

 


  

  return (
    <div className="App">
      <Display list={addingItems}/>

      <AddItem add={addEmployee}/>
      
    </div>
  );
}

export default App;
