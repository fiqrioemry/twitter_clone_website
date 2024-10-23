import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import LeftBar from "./component/LeftBar";
import RightBar from "./component/RightBar";
import MainPage from "./pages/MainPage";
import ExamplePage from "./pages/ExamplePage";

function Layout({ children }) {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" && <LeftBar />}
      <div>{children}</div>
      {location.pathname !== "/" && <RightBar />}
    </div>
  );
}

function App() {
  return (
    <main>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<ExamplePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </Layout>
      </Router>
    </main>
  );
}

export default App;
