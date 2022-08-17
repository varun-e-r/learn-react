
import './App.css';
import axios from 'axios'
import {useState} from 'react'
function App() {
  const[state,SetState]=useState([])
  return (
    <div className="App">
      <h1>hello</h1>
      <button onClick={()=>{axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
        console.log(response.data)
        SetState(response.data)

      })}}>click here</button>
      {

        state.map((obj,index)=>{
          return(

            <div>
              <h1>{index+1}</h1>
                <h1>{obj.title}</h1>
                <h3>{obj.body}</h3>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
