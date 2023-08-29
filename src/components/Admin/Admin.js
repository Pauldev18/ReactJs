import SideBar from './SideBar';
import React from 'react'
import './Admin.scss'
import {useState} from "react"
import { FaBars } from 'react-icons/fa';
const Admin = ()=>{
  const [collapsed, setCollapsed] = useState(false);
  return(
    <div className='admin-container'>
      <div className='admin-sidebar'>
      <SideBar collapsed={collapsed}/>
      </div>
      <div className='admin-content'>
        <FaBars onClick={()=> setCollapsed(!collapsed)}/>
        Admin content
      </div>
    </div>
  )
}
export default Admin;