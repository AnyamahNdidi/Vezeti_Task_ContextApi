import React from 'react'
import "./style.css"
const Footer = () => {
  return (
    <div className='containerfooter'>
          <div className='wrapperfooter'>
                <div className='firstdiv'>
                    <div className='footerLogo'>Vezeti Services Limited</div>
                    <p>
							{/* The one-stop platform for all <br />
							financial management of small and <br />
							medium-sized businesses */}
						</p>
                </div>

                <div className='secondiv'>
                    <div>
                        <div className='titlefooter'>Platform</div>
                        <div className='footernav'>Home</div>
                        <div className='footernav'>Home</div>
                    </div>
                    <div>
                        <div className='titlefooter'>Check</div>
                        <div className='footernav'>All product</div>
                        <div className='footernav'>All product</div>
                    </div>
                    <div>
                        <div className='titlefooter'>Remove</div>
                        <div className='footernav'>Done</div>
                        <div className='footernav'>Done</div>
                    </div>
                    <div>
                        <div className='titlefooter'>List</div>
                        <div className='footernav'>List Of Product</div>
                        <div className='footernav'>List Of Product</div>
                    </div>

                </div>
          </div>
          <div className='copyt'>
          <span>© 2023 intern Vezeti Services Limited. All right reserved.</span>
          </div>
    </div>
  )
}

export default Footer