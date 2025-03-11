
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import About from "./About";
import QABox from "./QABox/QABox";
import KdixFes from "./KdixFes";
import ComingSoon from "./ComingSoon";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/qabox" element={<QABox />} />
        <Route path="/kdixfes" element={<KdixFes />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
