import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import TopBar from "./Layout/TopBar";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import Cart from "./Pages/Cart";
import Products from "./Pages/Products";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
    <BrowserRouter>
      <TopBar />
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/products"element={<Products />} />
          <Route path="/login"element={<Login />} />
          <Route path="/register"element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </div>
  );
}

export default App;
