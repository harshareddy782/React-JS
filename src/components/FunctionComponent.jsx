import React, {useState} from "react";
function FunctionComponent(props) {
    const[count,setCount]=useState(0)
    const[changename,setChangeName]=useState("")
    return(
        <div>
        <h3>this is our function component</h3>
        <button onClick={()=> {setCount( count+ 1)}}>Click on me to increment 1</button>
        <button onClick={()=> {setCount( count- 1)}}>Click on me to increment 1</button>
        <h3>{count}</h3>
        <h3>my Name is {props.name} and my age is {props.age}</h3>
        <input type="text" onChange={(e)=>setChangeName(e.target.value)}/>
        <button onClick={()=> props.setName(changename)}>change name </button>
        </div>
    );
}
export default FunctionComponent;