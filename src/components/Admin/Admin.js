import SideBar from './SideBar';
import React from 'react'
import './Admin.scss'
import {useState} from "react"
import { FaBars } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
const Admin = ()=>{
  const [collapsed, setCollapsed] = useState(false);
  return(
    <div className='admin-container'>
      <div className='admin-sidebar'>
      <SideBar collapsed={collapsed}/>
      </div>
      <div className='admin-main'>
        <div className='admin-header'>
        <FaBars onClick={()=> setCollapsed(!collapsed)}/>
        </div>
        <div className='admin-content'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}
export default Admin;