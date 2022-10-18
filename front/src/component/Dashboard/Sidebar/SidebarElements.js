import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';



export const Nav = styled.div`
    background:#fff;
    height:80px;
    display:flex;
    align-items: center;
    justify-content: flex-start;
    /*box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.4);*/
    position: sticky;
    top: 0;
    z-index : 10;
    border-bottom: 0.01px solid lightgray;
`;

export const NavIcon = styled.div`
    margin-left: 2rem;
    color: #000;
    font-size:1.8rem;
    cursor: pointer;
    height:80px;
    display:flex;
    align-items: center;
    justify-content: flex-start;
    z-index:11;
    &:hover {
        color: #000;
    }
    
`;

export const SidebarNav = styled.nav`
    width :300px;
    height:100vh;
    display:flex;
    justify-content : center;
    position : fixed;
    top:80px;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%') };
    z-index:16;
    position: fixed;
    border-right: 1px solid lightgray;
    
    
    
`;


export const SidebarWrap = styled.div`
    /*background: #f7f3eb;*/
    background : #fff;
    width:100%;
    
`;

export const NavBtn = styled.nav`
    display : flex;
    align-items : center;
    margin-left: 100px;

`;

export const NavBtnLink = styled.button`
    border-radius : 50px;
    white-space: nowrap;
    padding: 10px 22px;
    color : #000;
    background : #fff;
    font-size: 16px;
    outline:none;
    border:none;
    cursor :pointer;
    transition : all 0.2s ease-in-out;
    text-decoration : none;
    font-weight : bold;
    /*margin-right: 40px;*/
    border : 1px solid #000;
    margin-right: 5px;


    &:hover {
        transition : all 0.2s ease-in-out;
        background: #000;
        color : #fff;
        text-decoration: none;
        border : 1px solid #000;
    }

`;

export const NavLogo = styled(LinkR)`
    color: #000;
    justify-self : flex-start;
    cursor : pointer;
    font-size : 2rem;
    display: flex ;
    align-items: center;
    margin-left: 0px;
    font-weight : bold;
    text-decoration : none;
    margin-top:10px;
    padding-left:40px;

    @media screen and (max-width:768px) {
        margin-left: -80px;
    }
    

`;

export const NavContainer = styled.div`
    display :flex;
    justify-content: space-between;
    width: 100%;
    

`;


export const Background = styled.div`
    width:100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    position:fixed;
    display: flex;
    justify-content : center;
    align-items: center;
    z-index:15;
    display: ${({sidebar})=> (sidebar ? '' : 'none')};
`;