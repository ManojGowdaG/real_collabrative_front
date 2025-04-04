import { Link } from "react-router-dom";
const Navbar = () => (
  <nav>
    <h1>Document Collaboration Platform</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/register">Register</Link></li>
    </ul>
    <p>Collaborate on documents in real-time with ease.</p>
  </nav>
);
export default Navbar;