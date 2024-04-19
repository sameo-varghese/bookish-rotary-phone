// import logo from './logo.svg';
import './App.css';
import F1 from './components/F1';
import F3 from './components/F3';
import F2 from './components/F2';
import { Route, Routes } from 'react-router-dom';
import F4 from './components/F4';

 
function App() {
  return (
    <div className="App">
      
      <F2/>
     
    <Routes>
      <Route path='/' element={<F1/>}/>
      <Route path='/s' element={<F4/>}/>
      <Route path='/t' element={<F3/>}/>

    </Routes>
    </div>
  );
}

export default App;
