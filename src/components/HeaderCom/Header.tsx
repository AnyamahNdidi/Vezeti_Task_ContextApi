import React from 'react'
import "./style.css"
import MobileNav from './MobileNav';

const Header = () => {
    const [sideShow, setSideShow] = React.useState(true);

	const toggleSideBar = () => {
		setSideShow(!sideShow);
	};
  return (
    <div className='mainHeaderHolder'>
        <div className='logo'>Vezeti Services </div>
        <div className='navigation'>
         
        </div>

        {
            sideShow ?
             (
                <div className='menu' onClick={toggleSideBar}>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <div style={{width:"30px", height:"3px", background:"white", marginBottom:"3px"}}></div>
                        <div style={{width:"30px", height:"3px", background:"white",marginBottom:"3px"}}></div>
                        <div style={{width:"30px", height:"3px", background:"white",marginBottom:"3px"}}></div>
                    </div>
                </div>
             ) 
             : 
             (
                <div className='menu'  onClick={toggleSideBar}>
                    X
                </div>
             )
        }

        {/* {sideShow ? <MobileNav toggleSideBar={toggleSideBar} /> : null} */}

    </div>
  )
}

export default Header