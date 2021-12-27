import { Route, Routes } from "react-router-dom";
import "./app.css";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Watch from "./pages/watch/Watch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/home" element={<Home />} />
      <Route path="/watch" element={<Watch />} />
    </Routes>
  );
}

export default App;
