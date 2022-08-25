import './App.css';
import { BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Add from "./components/AddSection/AddSection";
import MainPage from "./components/MainPage/MainPage";
import SearchSection from "./components/SearchSection/SearchSection";
import AboutMe from "./components/AboutMe/AboutMe";
import LoginSection from "./components/login_section/LoginSection";



export default function App() {
  return (
      <div>
        <div className="container container-app">
          <Router>
            <div className="nav nav-app">
              <div className="logo-app">Sprawdzam</div>
              <nav>
                <ul className="menu">
                  <li>
                    <Link to="/home">Strona główna</Link>
                  </li>
                  <li>
                    <Link to="/add">Dodaj Urządzenie</Link>
                  </li>
                  <li>
                    <Link to="/search">Wyszukaj</Link>
                  </li>
                  <li>
                    <Link to="/info">O nas</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <Routes>
              <Route path="/Home" element={<MainPage/>} />
              <Route path="/Add" element={<Add/>} />
              <Route path="/Search" element={<SearchSection/>} />
              <Route path="/Info" element={<AboutMe/>} />
              <Route path="/Login" element={<LoginSection/>} />
            </Routes>
          </Router>
        </div>

        <footer className="footer">
          <div className="copyright">Copyright</div>
          <div className="social-icons"/>
            <ul>
              <li className="facebook-icon"><img src="variables/pictures/facebook.png" alt="facebook"/> </li>
              <li className="instagram-icon"><img src="variables/pictures/instagram.png" alt="instagram"/> </li>
            </ul>
            <div/>
        </footer>
      </div>

  );
}



