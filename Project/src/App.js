import React from 'react'
import Login from './Components/Login.js';
import Questions from './Components/Questions.js';
import Question from './Components/Question.js';
import Set from './Components/Set.js';
import PageNotFound from './Components/PageNotFound.js';
import Qp from './Components/qp.js';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
function App() {
  
  return (
        <div>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/Login" element={<Login/>}></Route>
                <Route path="/Question" element={<Question/>}></Route>
                <Route path="/Questions" element={<Questions/>}></Route>
                <Route path="/Set" element={<Set/>}></Route>
                <Route path="/qp" element={<Qp/>}></Route>
                <Route path="*" element={<PageNotFound/>}></Route>
            </Routes>
        </div>
      );
}

export default App;
