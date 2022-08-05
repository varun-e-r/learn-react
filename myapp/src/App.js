let count=0
function App(){


function counter(){
  count+=1
  console.log(count);
  }
<button onClick={counter}>Click here</button>
}
export default App;