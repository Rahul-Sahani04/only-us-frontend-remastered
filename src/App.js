import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
    <Routes>
      {/* <Route exact path="/" element={<Login />}></Route> */}
      <Route exact path="/home" element={<Home />}></Route>
      {/* <Route exact path="/signup" element={<Signup />}></Route> */}
    </Routes>
  </Router>
  );
}

export default App;
