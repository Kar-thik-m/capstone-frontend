import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Login from './user/login';
import Register from './user/register';
import PrivateRoute from '../PrivateRoute';
import Nav from './componant/nav';
import Add from "./componant/Add";
import Fashion from "./componant/Fashion";
import Electronics from "./componant/electronics";
import Furnitures from "./componant/Furnitures";
import appstyles from "./componant/App.module.css";

const App = () => {
  return (
    <BrowserRouter>
      <nav className={appstyles.nav}>
        <Link to="item/register">Register</Link>
        <Link to="item/login">Login</Link>
        <Link to="/item" className={appstyles.link}>HOME</Link>
        <Link to="item/add" className={appstyles.link}>ADD ITEMS</Link>
        <Link to="item/furnitures" className={appstyles.link}>FURNITURES</Link>
        <Link to="item/electronics" className={appstyles.link}>ELECTRONICS</Link>
        <Link to="item/fashion" className={appstyles.link}>FASHION</Link>
      </nav>
      <Routes>
      <Route path="/" element={<PrivateRoute element={<Nav />} />} />
      <Route path="item">
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="nav" element={<Nav />} />
        <Route path="add" element={<Add />} />
        <Route path="furnitures" element={<Furnitures />} />
        <Route path="electronics" element={<Electronics />} />
        <Route path="fashion" element={<Fashion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
