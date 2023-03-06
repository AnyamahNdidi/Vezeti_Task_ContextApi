import React from 'react'
import {AppContext} from "../UseContext/Global"



interface IData {
  id: number;
  title: string;
  price: string;
 
}

type IdataContextType = {
  data: IData[];
  addData: (dataadd: IData) => void;
  // updateTodo: (id: number) => void;
  setData: React.Dispatch<React.SetStateAction<IData[]>>;
  show:boolean;
  setShow:React.Dispatch<React.SetStateAction<boolean>>
  showToggle :() => void;

  
};


const AddProduct = () => {
  const {addData, showToggle}  = React.useContext(AppContext) as IdataContextType
  const [inputData, setInputData] = React.useState<IData | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setInputData({
      ...inputData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleSaveData = (e: React.FormEvent, formData: IData | any) => {
    e.preventDefault();
    addData(formData);
    showToggle()
  };

  return (
    <div className='addmycon'>'
     <div className='cancel_form'>
     <div className='mycancel'>
      <span onClick={showToggle}>x</span>
     </div>
     <form className='myformcon' onSubmit={(e) => handleSaveData(e, inputData)}>
          <input type="text" required  placeholder='title' onChange={handleForm} id="title"/>
          <input type="text" required  placeholder='price' onChange={handleForm} id="price"/>
          <button disabled={inputData === undefined ? true : false}>Submit</button>
      </form>
     </div>
   
    </div>
  )
}

export default AddProduct