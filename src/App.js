import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/OtherNavCom/About";
import Table from "./Components/Table/Table";
import "@fortawesome/fontawesome-free/css/all.css";
import { Route, Routes } from "react-router-dom";
import View from "./Components/View/View";
import Post from "./Components/Post/Post";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/about" element={<About title="About" />} />
        <Route path="/contact" element={<About title="Contact" />} />
        <Route path="/view/:ID" element={<View />} />
        <Route path="/post" element={<Post />} />
      </Routes>
      <div className="App-container">
        <Routes>
          <Route path="/" element={<Table />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
