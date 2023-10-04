import logo from './logo.svg';
import './public/style/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './routes/Header';
import Center from './routes/Center';
import Bottom from './routes/Bottom';
import Footer from './routes/Footer';
import Youtube1 from './routes/Youtube';
import Swiper1 from './routes/Swiper';
import Register from './routes/Register'
import Login from './routes/Login'  
import Home from './routes/Home'
import SearchId from './routes/SearchId';
import SearchPwd from './routes/SearchPwd';
import Premium from './routes/Premium';
import Order from './routes/Order';
import New from './routes/New';


function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
           
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SearchId" element={<SearchId />} />
          <Route path="/SearchPwd" element={<SearchPwd />} />
          <Route path="/Premium" element={<Premium />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/New" element={<New />} />
          
      </Routes>
      
    </div >
    
    </BrowserRouter>
  );
}



export default App;
