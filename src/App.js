import "./App.css";
import ChatComponent from "./components/ChatsContainerComponent";
import { SideBar } from "./components/StrangersSideBar";
import { UserSideBar } from "./components/UserSideBar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
