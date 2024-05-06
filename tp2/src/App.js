//import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home/Home.jsx';
import Detalle from './pages/Detalle/Detalle.jsx';
import {
  Routes, Route, BrowserRouter as Router
} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalle/:id" element={<Detalle />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
