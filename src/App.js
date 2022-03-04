import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import {
  Routes,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Layout from "./components/layout/layout";
import Register from "./components/nav-bar/register";
import NoMatch404 from "./components/nav-bar/404";
import Login from './components/nav-bar/login';
import Logout from './components/nav-bar/logout';
import Usuarios from "./components/pages/usuarios";
import Movies from "./components/pages/movies";
import Pedidos from "./components/pages/pedidos";
import NuevoPedido from "./components/pages/nuevopedido";


function App() {
  return (
    <div className="App">
    
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NoMatch404 />} />
        {/* usuarios */}
          <Route path="usuarios/:id/:token" element={<Usuarios />} />
        {/* movies */}
          <Route path="movies" element={<Movies />} />
        {/* pedidos */}
          <Route path="pedidos" element={<Pedidos />} />
          <Route path="nuevoPedido" element={<NuevoPedido />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
