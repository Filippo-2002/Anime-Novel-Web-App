import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NovelContext } from "./Context/NovelContext"
import NovelForm from "./Form/NovelForm";

const EditNovel = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { novels, setNovels } = useContext(NovelContext);
  const novelToEdit = novels.filter(novel => novel.id === id);

  const handleOnSubmit = (novel) => {
    const filteredNovel = novels.filter(novel => novel.id !== id);
    setNovels([novel, ...filteredNovel]);
    navigate('/novels/list');
  }

  return (
    <div className="addForm">
      <NovelForm novel={novelToEdit[0]} handleSubmit={handleOnSubmit} />
    </div>
  )
}

export default EditNovel