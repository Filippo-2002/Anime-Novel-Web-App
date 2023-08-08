import { useContext } from "react";
import { NovelContext } from "./Context/NovelContext"
import Novel from "./Novel.js";

const ListNovel = () => {
  const { novels, setNovels } = useContext(NovelContext);

  const handleRemoveNovel = (id) => {
    const filteredNovels = novels.filter(novel => novel.id !== id);
    setNovels(filteredNovels)
  }

  return (
    <div className="listBook">
      {novels.length ? novels.map(novel => (
        <Novel novel={novel} key={novel.id} handleRemoveNovel={handleRemoveNovel} />
      )) : (
        <p className="noData">No books avaliable, Please add some book!</p>
      )}
    </div>
  )
}

export default ListNovel