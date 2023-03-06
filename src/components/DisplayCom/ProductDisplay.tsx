import React from 'react'
import Card from './CardCom/Card'
import {AppContext} from "../UseContext/Global"
import "./style.css"
import {checkdata} from "./FunctionsFile"

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
    mySeacrh:string;
    setMysearch:React.Dispatch<React.SetStateAction<string>>
    show:boolean;
    setShow:React.Dispatch<React.SetStateAction<boolean>>
    showToggle :() => void;
    
};

const ProductDisplay= () => {

const {data, mySeacrh, setMysearch, showToggle }  = React.useContext(AppContext) as IdataContextType
// console.log("i want to see", mySeacrh)


    const displayData = checkdata(data) ? (<div style={{
        width: "100%", height: "500px", display: "flex", justifyContent: "center",
         alignItems:"center", fontSize:"20px"
    }}>Product Has Not Been Add</div>) : data?.filter((val) => {
    if(mySeacrh === ""){
        return val
        console.log("hello wowdml", val)
    }else if( val.title.toLowerCase().includes(mySeacrh.toLowerCase()) || 
    val.price.toLowerCase().includes(mySeacrh.toLowerCase()) 
    
    ){
      return val
    }
})?.map((props)=>(
    <Card id={props.id} title={props.title} price={props.price}/>
))


  return (
    <div className='davd'>
        <div className='addsearch'>
            <div className='inputcon'>
                <input type="text" placeholder='seacrh for product.....' 

                    value={mySeacrh}
                    required
                    //   onChange={e => handleSerach(e.target.value) }
                    onChange = {(e: React.ChangeEvent<HTMLInputElement>)=> setMysearch(e.target.value) }
                />
            </div>
            <div className='addholder'>
                <div className='add' onClick={showToggle}>
                    ADD PRODUCT
                </div>
            </div>
        </div>
      
        
        <div className='my_card_holder' >
       
            <div className='my_card_holder1'>
           
           {displayData}
            
            
            </div>
              
        </div>
       
    </div>
  )
}

export default ProductDisplay