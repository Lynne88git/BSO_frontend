import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
//import Properties from "../Properties/Properties";
import "./Dashboard.scss";

const Dashboard = () => {
  const { user, logout } = useContext(UserContext);

  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
  }

  return (
    <div classNameName="home">
      <div className="wrapper">
        {/* <!-- Sidebar  --> */}
        <nav id="sidebar">
          <div className="sidebar-header">
            <p classNameName="text-white pt-2">Dashboard</p>
          </div>
        </nav>

        {/* <!-- Page Content  --> */}
        <div id="content">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav mr-auto w-100">
                  <div classNameName="text-dark mt-2 mr-2 ml-auto">
                    Welcome {user.email}
                  </div>
                  <li className="nav-item active">
                    <button classNameName="btn nav-link mx-2" onClick={logout}>
                      Log Out
                    </button>
                  </li>
                  <li className="nav-item active">
                    <Link classNameName="btn nav-link mx-2" to="/home">
                      Home
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
