import './App.css';
import { connect } from "react-redux";
import Footers from './components/footer/Footer';
import Contents from './components/contents/Contents';
import Login from "./components/login/Login.jsx"
import Head from './components/header/Head';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SideBar from './components/dashbord/sidebar/SideBar';
import Signup from './components/signup/Signup';

function App() {
  return (
    <div>
        <Router>
          <Head />
            <Routes>
              <Route path='/' element={<Contents />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/user//*' element={<SideBar />}/>
            </Routes>
          <Footers className="footers" />
        </Router>
    </div>
  );
}

export default connect() (App);
