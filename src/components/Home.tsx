import React from 'react'
import "./style.css"
import Header from "./HeaderCom/Header"
import Footer from './FooterCom/Footer'
import Showpro from './DisplayCom/Showpro'
import {AppContext} from "./UseContext/Global"
import AddProduct from './DisplayCom/AddProduct'


type IdataContextType = {

  mySeacrh:string;
  setMysearch:React.Dispatch<React.SetStateAction<string>>
  show:boolean;
  setShow:React.Dispatch<React.SetStateAction<boolean>>
  
};


const Home = () => {
  
  const {show}  = React.useContext(AppContext) as IdataContextType

  React.useEffect(()=>{
    if (show) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
},[show])

  return (
    <>
     {
        show ? (<AddProduct  />) : null
    }
          <div className='container'>
                  <Header/>
                  <Showpro/>
                  <Footer/>
              </div>
    </>
    
  )
}

export default Home