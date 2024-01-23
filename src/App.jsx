// App.jsx
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>

        <hr />

        
        <Routes>
           {/*  define routes here .. "/" for "<Home/>" and "/profile" for "<Profile/>" */}
          <Route path="" element={} />
          <Route path="" element={} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
