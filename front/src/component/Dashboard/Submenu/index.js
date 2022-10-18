import React, { Component } from 'react';
import { SidebarLink, SidebarLabel } from './SubmenuElements';

const Submenu = ({item, index}) => {
    return ( 
        
            <SidebarLink to={item.path} exact={true}>
                <div>
                    <span>{item.icon}</span>
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
            </SidebarLink>
        
     );
}
 
export default Submenu;
