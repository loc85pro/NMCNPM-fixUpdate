import React from "react";
import { Link } from "react-router-dom";
import "./AdminSideBar.css";

const AdminSideBar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="top">
          <div>
            <span className="logo">Winshop</span>
          </div>
        </div>
        <div className="mainSidebar">
          <ul className="main">
            <span className="title">MAIN</span>
            <Link to="/admin">
              <li>
                <ion-icon name="home-outline"></ion-icon>
                <span>Dashboard</span>
              </li>
            </Link>
          </ul>
          <ul className="lists">
            <span className="title">LIST</span>
            <Link to="/admin/users">
              <li>
                <ion-icon name="person-outline"></ion-icon>
                <span>Users</span>
              </li>
            </Link>
            <Link to="/admin/products">
              <li>
                <ion-icon name="storefront-outline"></ion-icon>
                <span>Product</span>
              </li>
            </Link>
            <Link to="/admin/orders">
              <li>
                <ion-icon name="card-outline"></ion-icon>
                <span>Orders</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminSideBar;
