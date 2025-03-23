import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import DocumentForm from "./DocumentForm";
import DocumentDetails from "./DocumentDetails";

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/new-document" element={<DocumentForm />} />
          <Route path="/document/:id" element={<DocumentDetails />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
