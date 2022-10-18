import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const activeClassName = 'active';

export const SidebarLink = styled(NavLink).attrs({ activeClassName })`
    display : flex;
    color: #000;
    justify-content: space-between;
    align-items:center;
    padding:20px;
    list-style: none;
    height : 50px;
    text-decoration: none;
    font-size:1rem;
   

    &:active{
        background : lightgray;
        color : #000;
        border-left : 6px solid #e00e14;
        cursor : pointer;
        text-decoration: none;
        font-weight : bold;
    }

    &:hover{
        background : lightgray;
        color : #000;
        border-left : 6px solid #e00e14;
        cursor : pointer;
        text-decoration: none;
    }

  
`;

export const SidebarLabel = styled.span`
    margin-left : 16px;
`;

