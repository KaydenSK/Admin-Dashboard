import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {  links } from "../data/dummy";
import { useStateContext } from '../contexts/ContextProvider.jsx';


const Sidebar = () => {

  const {activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();

  const handleSideBar =()=>{
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  }

  const themeColor =(currentColor)=>{
    if (currentColor === '#1A97F5') {
      return 'bg-blue-500'; 
    }
    if (currentColor === '#03C9D7') {
      return 'bg-blue-300'; 
    }
    if (currentColor === '#7352FF') {
      return 'bg-purple-500'; 
    }
    if (currentColor === '#FF5C8E') {
      return 'bg-pink-500'; 
    }
    if (currentColor === '#1E4DB7') {
      return 'bg-indigo-500'; 
    }
    if (currentColor === '#FB9678') {
      return 'bg-orange-500'; 
    }
  }

  const activeLink = `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2  ${themeColor(currentColor)}`;
  const normal = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';


 
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {
        activeMenu && (<>
          
          <div className='flex justify-between items-center'>
              <Link to="/" className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900' onClick={handleSideBar} >
                  <SiShopware /><span>Shoppy</span>
              </Link>
              <TooltipComponent content="Close" position='BottomCenter'>
                <button className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden' type='button' onClick={()=> setActiveMenu((prev) => !prev)}>
                {/* <GiCancel /> */}
                <MdOutlineCancel />
                </button>
              </TooltipComponent>
          </div>

          <div className='mt-10 '>
            {
              links.map((item, i)=>{
                return ( <div  key={i}>
                  <p className='text-gray-400 dark:text-gray-400 mt-4 m-3 uppercase'>
                    {item.title}
                  </p>
                  {item.links.map((link)=>{
                    return (
                      <NavLink  to={`/${link.name}`}  key={link.name}  onClick={handleSideBar} 
                      // style={{ backgroundColor: isActive ? '#1a97f5' : 'initial' }} 
                      isActive={currentColor}
                      className={({ isActive }) => isActive ? activeLink : normal}
                      
                      >
                        {/* ${currentColor} */}
                        {link.icon}
                        <span className='capitalize'>{link.name}</span>
                      </NavLink>
                    )
                  })}
                </div>)
              })
            }
          </div>
        </>)
      }
    </div>
  )
}

export default Sidebar