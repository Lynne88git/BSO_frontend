import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Properties from "../Properties/Properties";
import "./Home.scss";

const Home = () => {
  const { user, logout } = useContext(UserContext);

  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
  }

  return (
    <div className="home">
      <div class="wrapper">
        {/* <!-- Sidebar  --> */}
        <nav id="sidebar">
          <div class="sidebar-header">
            <p className="text-white pt-2">Dashboard</p>
          </div>
        </nav>

        {/* <!-- Page Content  --> */}
        <div id="content">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav mr-auto w-100">
                  <div className="text-dark mt-2 mr-2 ml-auto">
                    Welcome {user.email}
                  </div>
                  <li class="nav-item active">
                    <button className="btn nav-link mx-2" onClick={logout}>
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Properties />
        </div>
      </div>
    </div>
  );
};

export default Home;
