import React from 'react'
import ProductDisplay from './ProductDisplay'
import "./style.css"




const Showpro = () => {
  
  return (
    <>
  
        <div className="container_dis">
            <div className='showall'>
                <div className='titleproduct'>
                    <span>Products</span>
                   
               </div>
               <ProductDisplay />
            </div>

        </div>
    </>
  )
}

export default Showpro