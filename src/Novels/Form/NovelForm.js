import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const NovelForm = ({novel, handleSubmit}) => {
    const[novelState, setNovelState] = useState({
        name: novel ? novel.name : '',
        author: novel ? novel.author : '',
        price: novel ? novel.price : '',
    });

    const handleChange = (e) => {
        setNovelState({
            ...novelState,
            [e.target.name]: e.target.value
        })
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit({
            id: uuidv4(),
            date: new Date(),
        ...novelState
    });
    setNovelState({ name: '', author: '', price: ''})
  }

  const renderInputField = (label, placeholder, name) => (
    <div className="inputField">
      <label>{label}</label>
      <input value={novelState[name]} onChange={handleChange} name={name} type="text" placeholder={placeholder} />
    </div>
  );

const disabledSubmit = !novelState.name || !novelState.author || !novelState.price;

  return (
    <form onSubmit={onSubmit} className="form">
      {renderInputField('Book Name', 'Enter name of book...', 'name')}
      {renderInputField('Book Author', 'Enter name of author...', 'author')}
      {renderInputField('Book Price', 'Enter price of book...', 'price')}
      <button type="submit" className="btnForm" disabled={disabledSubmit}>{novel ? 'Update' : 'Submit'}</button>
    </form>
  )
}

export default NovelForm