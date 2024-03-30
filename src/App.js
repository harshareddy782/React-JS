
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionComponent';
import { useState } from 'react';
import {Routes, Route} from "react-router-dom"

function App() {
  const company = "DevTown"

  const [name, setName] = useState("harsha")
  return(    <div>
      <Routes>
        <Route path='/' element={<ClassComponent />}/>
        <Route path='/fun-comp' element={<FunctionalComponent />}/>
      </Routes>
    </div>
    
  );
}

export default App;


// <div>
    //   <h1>Hello world</h1>
    // <ClassComponent />
    //   {/* <ClassComponent />
    //     <ClassComponent />
    //       <ClassComponent />
    //         <ClassComponent /> */}
    //         {/* <FunctionalComponent name='Rohan' age={27}  company={company} /> */}
    //         <FunctionalComponent name={name} age={27}  company={company} setName={setName} />
    // </div>