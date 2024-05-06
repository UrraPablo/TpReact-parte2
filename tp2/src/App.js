//import logo from './logo.svg';
import './App.css';
import {Home} from './pages/Home/Home.jsx';
import Detalle from './pages/Detalle/Detalle.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/detalle",
    element:<Detalle />,
  },
]);

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
