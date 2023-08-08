import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NovelContext } from "./Context/NovelContext";
import NovelForm from "./Form/NovelForm";

const AddNovel = () => {
  const navigate = useNavigate();
  const { novels, setNovels } = useContext(NovelContext);

  const handleOnSubmit = (novel) => {
    setNovels([novel, ...novels]);
    navigate('/novels/list');
  }

  return (
    <div className="addForm">
      <NovelForm handleSubmit={handleOnSubmit} />
    </div>
  )
}

export default AddNovel