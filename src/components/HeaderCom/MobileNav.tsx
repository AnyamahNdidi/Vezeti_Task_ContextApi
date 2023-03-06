import React from 'react'

interface Iprops {
	toggleSideBar: () => void;
}

const MobileNav:React.FC<Iprops> = ({toggleSideBar}) => {
  return (
    <div>
        {/* <div className='sidenav'>
            <div className='wrapper'>
                <div className='navhold2'>   </div>
                <div className='navhold'>
                    <div className='nav1'>home</div>
                </div>
           </div>

        </div> */}
    </div>
  )
}

export default MobileNav