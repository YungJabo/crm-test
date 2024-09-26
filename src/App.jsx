import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./global.scss";
import { Citizens } from "./pages/Citizens/Citizens";
import { Navbar } from "./components/Navbar/Navbar";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { User } from "./pages/User/User";
function App() {
  return (
    <>
      <div className="wrapper">
        <Router basename="/crm-test">
          <Navbar />
          <Routes>
            <Route path={`/`} element={<Dashboard />} />
            <Route path={`/citizens`} element={<Citizens />} />
            <Route path={`/user/:id`} element={<User />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
