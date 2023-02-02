import React from "react";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import Sidebar from "../../components/Sidebar/Sidebar";
import Table from "../../components/Table/Table";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="sideBar">
        <Sidebar />
      </div>

      <div className="Home_comntent">
        <div className="nav">
          <Nav />
        </div>
        <div className="table">
          <Table />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
