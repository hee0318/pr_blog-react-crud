import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Write from "./pages/Write";
import List from "./pages/List";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Update from "./pages/Update";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<List />} />
            <Route path="/write" element={<Write />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/update" element={<Update />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
