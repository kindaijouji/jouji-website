
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import QABox from "./QABox";
import KdixFes from "./KdixFes";
import ComingSoon from "./ComingSoon";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/qaboox" element={<QABox />} />
        <Route path="/kdixfes" element={<KdixFes />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
