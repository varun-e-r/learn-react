import React from "react";

function Add(props) {
  let add;
  const validate=(todo)=>{if(todo===''){
    add=true;
    alert('Must enter data');

  }
}

return(
  ()=>{validate(props.toDo);if(!add){
  props.setToDos([...props.toDos,{id:Date.now(),text:props.toDo,status:false}]);props.setToDo(''); }}
)
}

export default Add
