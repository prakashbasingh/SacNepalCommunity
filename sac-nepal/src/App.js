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
// Photo by <a href="https://unsplash.com/@ajeets?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ajeet Manandhar</a> on <a href="https://unsplash.com/photos/R2sI4cwPXqQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a href="https://unsplash.com/@leo_visions_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Leo</a> on <a href="https://unsplash.com/photos/YVcg27FuJzs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
