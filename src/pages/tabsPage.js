import { NavLink, Outlet } from "react-router-dom";
import { useNavigate, useNavigation } from "react-router-dom";
import React, { useEffect, lazy } from "react";
import { useLocation } from "react-router-dom";
import './tabsPage.scss';

const TabsPage = ({data}) => {
const navigate = useNavigate();
const location = useLocation();
const proccess = useNavigation()

useEffect(() => {
  localStorage.setItem('tab', JSON.stringify(location.pathname.length > 1 ? location.pathname : 'dummyTable'))
  navigate(JSON.parse(localStorage.getItem('tab')))

  },[location.pathname, navigate])

 return <div className='wrapper'>

 <ul className='list'>
   {
    data.map(({id, title}) => {
      return <li key={id}><NavLink className={({isActive}) => isActive ? 'active' : 'link'} to={`${id}`}>{title}</NavLink></li>
    })
   }
 </ul>
 
 {proccess.state === 'loading' ? <div className='loading'>Loading...</div> : <div className='content'><Outlet/></div>}
 </div>
}

export default TabsPage;
