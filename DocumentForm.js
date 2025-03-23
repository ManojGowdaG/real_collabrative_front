import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const DocumentForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/documents", { title, content });
    navigate("/dashboard");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required />
      <button type="submit">Save</button>
    </form>
  );
};
export default DocumentForm;
