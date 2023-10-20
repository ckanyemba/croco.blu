import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import CheckoutSuccess from './components/CheckoutSuccess';

import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import Register from './components/auth/Register';
import Login from './components/auth/Login';

function App() {
  return (
    <Router className="App">
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout-success' element={<CheckoutSuccess/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;