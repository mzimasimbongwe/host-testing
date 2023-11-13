import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-full">
      <aside
        className={`fixed top-34 left-0 bg-blue-500 text-white  
          max-h-80 overflow-y-auto
          ${open ? "w-64" : "w-16"} transition duration-300`}
      >
        <header className="flex items-center p-4">
          <img src={logo} className="w-8 h-8 mr-4" alt="Logo" />
          <h1>John Doe</h1>
          <button onClick={() => setOpen(!open)}>Menu</button>
        </header>

        <nav className="px-4 py-3">
          <ul className="flex flex-col">
            <li>
              <Link to="/students">Students</Link>
            </li>
            <li>
              <Link to="/teachers">Teachers</Link>
            </li>
            <li>
              <Link to="/classes">Classes</Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-4 overflow-y-auto">
        {/* Page content */}
        <h2>Dashboard</h2>
        <p>Welcome!</p>
      </main>
    </div>
  );
}
