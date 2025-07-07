import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/addList' element={<Form />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
