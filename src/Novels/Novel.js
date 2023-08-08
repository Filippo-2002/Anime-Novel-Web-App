import { useNavigate } from "react-router-dom";

const Novel = ({ novel, handleRemoveNovel }) => {
  const navigate = useNavigate();
  const { id, name, author, price, date } = novel;

  return (
    <div className="book">
      <h2>{name}</h2>
      <div className="bookDetail">
        <p>Author: {author}</p>
        <p>Price: {price}</p>
        <p>Date: {new Date(date).toDateString()}</p>
      </div>
      <div className="buttons">
        <button onClick={() => navigate(`/novels/edit/${id}`)}>Edit</button>
        <button onClick={() => handleRemoveNovel(id)}>Delete</button>
      </div>
    </div>
  )
}

export default Novel