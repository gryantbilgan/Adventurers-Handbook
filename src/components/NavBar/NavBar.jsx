import React from "react";
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
      <Link to="/quests/new">New Quest</Link>
    </nav>
  );
  
}
