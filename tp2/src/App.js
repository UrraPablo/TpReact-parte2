//import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home/Home.jsx';
import Detalle from './pages/Detalle/Detalle.jsx';
import {
  Routes, Route, BrowserRouter as Router
} from "react-router-dom";
import {ROUTES} from "./componentes/Const/Routes.js";
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.detalles} element={<Detalle />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
