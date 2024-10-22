import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import LeftBar from "./component/LeftBar";
import RightBar from "./component/RightBar";

function App() {
  return (
    <main>
      <Router>
        <LeftBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <RightBar />
      </Router>
    </main>
  );
}

export default App;
