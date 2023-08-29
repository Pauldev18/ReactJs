import { useIntl } from 'react-intl';
import 'react-pro-sidebar/dist/css/styles.css'
import { AiFillIdcard } from "react-icons/ai";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import sidebarBg from '../../assets/bg2.jpg';
const SideBar = ({ image, collapsed, toggled, handleToggleSidebar })=>{
  return(
  <>
    <ProSidebar
      image={image ? sidebarBg : false}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
      >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          <AiFillIdcard size={"3em"} />
            <span>Paul Dev</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
          >
            Dashboard
          </MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            title='Admin'
            icon={<FaRegLaughWink />}
          >
            <MenuItem>Quan ly users</MenuItem>
            <MenuItem>Quan ly quiz</MenuItem>
            <MenuItem>Quan ly question</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com/pauldev18"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
             PaulDev
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  </>
  )
}
export default SideBar;