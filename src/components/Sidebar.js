import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import {SidebarData} from "./SidebarData";
import SubMenu from "./SubMenu";
import {IconContext} from "react-icons";
import sdit from '../image/sdit.png';

const Nav = styled.div`
  background: #32C671;
  height: 82px;
  display: flex;
  padding: 0 2rem;
  justify-content: flex-start;
  align-items: center;
  color: #fafafafa;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #343A40;
  width: 300px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 8.5%;
  left: 50%;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;


const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff'}}>
                <Nav>
                    <img className="d-block  rounded" src={sdit} alt="sdit" height="45" align="left" />
                    &emsp;
                    <h3>PPDB SDIT Fatahillah</h3>
                    <NavIcon to="#">
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </NavIcon>
                </Nav>
                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        {SidebarData.map((item, index) => {
                            return<SubMenu item={item} key={index} />;
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    );
};

export default Sidebar;