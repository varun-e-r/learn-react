let count=0
function App(){


function counter(){
    count+=1
    console.log(count);
    }
return(
<div>
<button onClick={counter}>Click here</button>
<h1> hello world</h1>
</div>
)
};
export default App;