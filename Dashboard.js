import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Dashboard = () => {
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/documents").then((response) => {
      setDocuments(response.data);
    });
  }, []);
  return (
    <div>
      <h2>Dashboard</h2>
      <Link to="/new-document">Create New Document</Link>
      <ul>
        {documents.map((doc) => (
          <li key={doc.id}><Link to={`/document/${doc.id}`}>{doc.title}</Link></li>
        ))}
      </ul>
    </div>
  );
};
export default Dashboard;