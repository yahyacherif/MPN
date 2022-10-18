import React, { Component, useState } from 'react';
import * as CgIcons from 'react-icons/cg';
import * as FiIcons from 'react-icons/fi';
import { Nav, NavIcon } from './SidebarElements';
import { SidebarNav, SidebarWrap, NavBtn, NavBtnLink, NavLogo, NavContainer, Background} from './SidebarElements';
import { SidebarData } from './SidebarData';
import Submenu from '../Submenu';
import { useNavigate } from 'react-router-dom';



const   Sidebar = () => {
    var navigate = useNavigate();
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar); 

    const handleLogout = () => {
        localStorage.removeItem('token');
        alert('Vous êtes maintenant déconnecté(e) de votre compte!')
        navigate('/');
        window.location.reload();
    }

    return ( 
    <>
        <Nav>
            <NavIcon onClick={showSidebar}>
                { sidebar ? <CgIcons.CgClose /> : <CgIcons.CgMenuLeft /> }
            </NavIcon>
           <NavContainer>

                <NavBtn>
                    <NavBtnLink onClick={handleLogout} >
                        logout
                       {<FiIcons.FiLogOut style={{marginLeft:'12px', fontSize:'12px'}}/>}
                    </NavBtnLink>
                    
                </NavBtn>
           </NavContainer>
        </Nav>
        <Background sidebar={sidebar}></Background>
        <SidebarNav sidebar={sidebar}>
           {/* <BrowserRouter>*/ }
            <SidebarWrap>
               {SidebarData.map((item,index)=>{
                    return <Submenu item={item} key={index} />
               })}
            </SidebarWrap>
            {/* </BrowserRouter>*/}
        </SidebarNav>
    </> 
    
    );
}
 
export default Sidebar;