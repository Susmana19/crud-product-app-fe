//import eksternal
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import internal
import Home from "./pages/Home/";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct";
import DetailProduct from "./pages/DetailProduct";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/detail/:id" element={<DetailProduct />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
