import React from 'react';
import './Sidebar.css';
import { navLinks } from '../data/navigation';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
  <h2>
    <span className="text-primary">Health</span>
    <span className="text-accent">care</span><span className="dot">.</span>
  </h2>
</div>
      <h3>General</h3>
      <ul>
        {navLinks.map((link, idx) => (
          <li key={idx}>
            <img
              src={require(`../assets/${link.icon}.png`)}
              alt={link.label}
              className="nav-icon"
            />
            {link.label}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
