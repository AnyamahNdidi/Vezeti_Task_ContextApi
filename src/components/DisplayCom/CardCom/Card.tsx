import React from 'react'
import "./style.css"
import pix  from "./cart.jpeg"
import {AppContext} from "../../UseContext/Global"

interface Idata{
   id:number;
   title:string;
   price:string
}

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
   deleteData: (id: number) => void;
   
   
 };
const Card:React.FC<Idata> = ({title, price, id}) => {

  const {data, setData}  = React.useContext(AppContext) as IdataContextType

  const deleteSt = async(id:number)=>{
  
   // const allstafes = [...data]
   const removeItem = data.filter((el) => {
      // return the rest of the todos that don't match the item we are deleting
      return el.id !== id;
    });
    setData(removeItem)

 }

  return (
    <div className='pro_card' key={id}>
       <div className='imageHolder'>
          <img src={pix} alt="" />
       </div>
       <div className='title_price'>
            <span>{title}</span>
            <p>
                {price}
            </p>
       </div>

       <div className='buttoninstock'>
          <pre>In Stock</pre>
           <div className='remove' onClick={()=>{
            deleteSt(id);
            console.log(id)
           }}>Remove</div>
       </div>
    </div>
  )
}

export default Card
