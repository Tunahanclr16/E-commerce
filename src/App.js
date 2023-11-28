import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import TopBar from "./Layout/TopBar";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
    <BrowserRouter>
      <TopBar />
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </div>
  );
}

export default App;
