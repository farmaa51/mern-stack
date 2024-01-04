import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center">
      <div>
        <h1>Logo</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
