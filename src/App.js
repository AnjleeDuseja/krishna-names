
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import DisplayName from './Home/DisplayName';



function App() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/:id' element={<DisplayName/>}/>
    
   </Routes>
  );
}

export default App;
