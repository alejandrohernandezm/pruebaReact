import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

//Components
import ApiComponent from './Components/Api'


function App() {
  const url = 'https://jsonplaceholder.typicode.com/users/1/todos';
        const [todos, setTodos] = useState()
        const fetchApi = async () => {
        const  response = await fetch(url)
            console.log(response.status)
            const json = await response.json()
            setTodos(json);
            console.log(json)
        }


        useEffect(() => {
            fetchApi()
        }, [])

        return(
         <div className="App">
           <ul>
             <h1>Api</h1>
             {!todos ? 'Loading..': todos.map((data)=>{
               return <li>{data.id}: {data.title}  {data.completed}</li>

             })
             }
           </ul>
         </div>
        )
}

export default App;
