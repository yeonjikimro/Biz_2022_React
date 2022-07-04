import logo from "./logo.svg";
import "./w3css.css";
import Home from "./comps/Home";
import BucketMain from "./comps/bucket/BucketMain";
import TodoMain from "./comps/TodoMain";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navi from "./comps/Navi";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* react-router-dom 의 영역 */}
      <BrowserRouter>
        <Navi />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoMain />} />
          <Route path="/bucket" element={<BucketMain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
