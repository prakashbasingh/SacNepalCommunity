import "./App.css";

import Navbar from "./Components/navbar";
import Footer from "./Components/footer";

import Home from "./pages/Home";
import Events from "./pages/Events";
import News from "./pages/News";
import Market from "./pages/Market";
import MembersCommittee from "./pages/MembersCommittee";
import AboutUs from "./pages/AboutUs";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/news" element={<News />} />
          <Route path="/market" element={<Market />} />
          <Route path="/membersCommittee" element={<MembersCommittee />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
