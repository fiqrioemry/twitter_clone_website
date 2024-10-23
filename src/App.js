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
    <div className="flex h-screen bg-secondary">
      {location.pathname !== "/" && <navbar />}
      <main className=" w-[85%] md:w-[80%] lg:w-[75%] flex flex-row h-screen overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

function App() {
  return (
    <div className="flex h-screen bg-secondary">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<ExamplePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
