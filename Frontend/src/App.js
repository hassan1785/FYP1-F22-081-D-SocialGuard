import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About/About';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Services from './components/Services/Services';
import Contacts from './components/Contact/Contact';
import CaseRegisteration from "./components/CaseRegisteration/CaseRegisteration";
import Welcome from "./components/Welcome/Welcome";
import EditProfile from './components/EditProfile/EditProfile';
import FIAview from "./components/FIAview/FIAview";
import CaseReport from "./components/CaseReport/CaseReport";
import Admin from "./components/Admin/Admin"
import Consultancy from "./components/Consultancy/Consultancy";


import './App.css';
import { useState } from "react";



function App() {

  const [user, setLoginUser] = useState({});


  const loggedIn = window.localStorage.getItem('isLoggedin');

  return (


    <Router>


      <main id="main">

        <body id="body">



          <div>


            <nav id="navbar">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>



                <li>
                  <Link to="/aboutus">About Us</Link>
                </li>

                <li>
                  <Link to="/services">Services</Link>
                </li>

                <li>
                  <Link to="/contactus">Contact Us</Link>
                </li>

                <li>
                  <Link to="/fiaview">FIA View</Link>
                </li>

              </ul>
            </nav>

            <footer id="footer">



              <p id="p1">  All copyrights reserved © </p>
            </footer>

            <Switch>
              <Route path="/register">
                {
                  loggedIn ? <Welcome /> : <Register />
                }
              </Route>

              <Route path="/" exact component={loggedIn ? Welcome : Home} />

              <Route path="/login">
                {
                  loggedIn ? <Welcome /> : <Login setLoginUser={setLoginUser} />
                }
              </Route>

              <Route path="/consultant">
                {
                  loggedIn ? <Consultancy /> : <Login setLoginUser={setLoginUser} />
                }
              </Route>

              <Route path="/admin">
                {
                  loggedIn ? <Admin /> : <Login setLoginUser={setLoginUser} />
                }
              </Route>


              <Route path="/aboutus" exact>
                <About />
              </Route>


              <Route path="/services">
                <Services />
              </Route>



              <Route path="/contactus">
                <Contacts />
              </Route>

              <Route path="/caseregister">
                {
                  loggedIn ? <CaseRegisteration /> : <Login setLoginUser={setLoginUser} />
                }
              </Route>


              <Route path="/welcome">
                {
                  loggedIn ? <Welcome /> : <Login setLoginUser={setLoginUser} />
                }

              </Route>


              <Route path="/editprofile">
                {
                  loggedIn ? <EditProfile /> : <Login setLoginUser={setLoginUser} />
                }
              </Route>

              <Route path="/fiaview">
                <FIAview />
              </Route>

              <Route path="/casereport">
                {
                  loggedIn ? <CaseReport /> : <Login setLoginUser={setLoginUser} />
                }
              </Route>







            </Switch>
          </div>
        </body>

      </main>
    </Router >
  )
}

export default App