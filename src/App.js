import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
// import Home from './components/Home';
import TableData from './components/TableData';

function App() {
  return (
    <>    
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/table" element={<TableData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
