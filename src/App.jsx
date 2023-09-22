import { Route, Routes } from "react-router-dom";
import { Home, About } from "./Pages";
import { Navbar, Footer } from "./Components";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
