import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import io from "socket.io-client";
const socket = io("http://localhost:5000");
const DocumentDetails = () => {
  const { id } = useParams();
  const [content, setContent] = useState("");
  useEffect(() => {
    axios.get(`http://localhost:5000/documents/${id}`).then((response) => {
      setContent(response.data.content);
    });
    socket.on("update", (newContent) => {
      setContent(newContent);
    });
  }, [id]);
  const handleEdit = (e) => {
    setContent(e.target.value);
    socket.emit("edit", { id, content: e.target.value });
  };
  return (
    <div>
      <h2>Editing Document {id}</h2>
      <textarea value={content} onChange={handleEdit} />
    </div>
  );
};
export default DocumentDetails;
