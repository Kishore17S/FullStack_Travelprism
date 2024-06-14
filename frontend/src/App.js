import logo from './logo.svg';
import './App.css';
import Display from './Pages/display.jsx';
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/display" element={<Display />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </Router>
  );
}

export default App;
