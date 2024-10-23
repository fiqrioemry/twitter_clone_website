import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./component/Navbar";

function Layout({ children }) {
  const location = useLocation();
  return (
    <div className="flex h-screen bg-secondary ">
      {location.pathname !== "/" && <Navbar />}
      <main className=" w-[85%] md:w-[80%] lg:w-[75%]  h-screen overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
