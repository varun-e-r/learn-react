
import Employee from "./Employee";

let emp=[{name:'musk',age:20},
        {name:'dhoni',age:30},
        {name:'kohli',age:40}]

function App(){

return(
<div className="App">
{
    emp.map((obj,index)=>
        
        <Employee key={index} {...obj} />
        
    )
}


</div>
);
}
export default App;