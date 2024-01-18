import React from 'react';
import Home from './Home';
import PickWinner from './PickWinner';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';

function App() {
  return(
    <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/PickWinner">PickWinner</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/PickWinner" element={<PickWinner />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;






// import React from "react";
// import Home from "./Home.js";
// import PickWinner from "./PickWinner.js";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import "./App.css";
// function App() {
//   return (

//     <BrowserRouter>
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <link to ="/">Home</link>
//           </li>
//           <li>
//             <link to ="/PickWinner">PickWinner</link>
//           </li>
//         </ul>
//       </nav>
//       {/* <Routes >
//         <Route path="/PickWinner" element={<PickWinner/>}>
//         </Route>
//         <Route path="/" element={<Home/>}>
//         </Route>
//       </Routes> */}

//       <Routes>
//         <Route path="/PickWinner" element={<PickWinner />}></Route>
//         <Route path="/" element={<Home />}></Route>
//       </Routes>
//     </div>
//     </BrowserRouter>
    
//   )
// }

// export default App;
