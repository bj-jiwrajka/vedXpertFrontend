import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages";
import { Navbar, Footer } from "./Components";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
