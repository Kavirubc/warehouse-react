import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Brands from './pages/brands';
import './App.css';
import Stocks from './pages/stocks';
import Reports from './pages/reports';
import Products from './pages/products';
import Teams from './pages/teams';
import Orders from './pages/orders';
import Login from './pages/login';
import Signup from './pages/signup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/products" element={<Products />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
