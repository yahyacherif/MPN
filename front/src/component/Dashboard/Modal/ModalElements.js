import styled from 'styled-components';
import { CgClose } from 'react-icons/cg';

export const Background = styled.div`
    width:100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    position:fixed;
    display: flex;
    top:0;
    justify-content : center;
    align-items: center;
    z-index:999;
`;

export const ModalWrapper = styled.div`
    width:500px;
    height: 400px;
    background: #fff;
    color: #000;
    position:fixed;
    display: grid;
    grid-template-columns: 1fr;
    position: relative;
    z-index:12;
    border-radius : 5px;
    /*margin-bottom:100px;*/
    
`;

export const ModalImg = styled.img`
    width:100%;
    height: 100%;
    background: #000;
    border-radius: 5px 0 0 5px;
`;



export const CloseModalButton = styled(CgClose)`
    cursor: pointer;
    position: absolute;
    top:20px;
    right:20px;
    width:32px;
    height: 32px;
    padding: 0;
    z-index :12;
`;



export const Form = styled.form`
    background: #fff;
    border : none;
	max-width: 400px;
	height : auto;
	width: 100%;
	z-index: 1;
	display: grid;
	margin:0 auto;
	padding: 30px 10px 10px 10px;
	border-radius: 4px;
	/*box-shadow: 0 1px 3px rgba(0,0,0,0.9);*/
    

	@media screen and (max-width: 400px) {
		padding: 32px 32px;
	}
`;

export const FormH1 = styled.h1`
    margin-bottom: 10px;
	color:#000;
	font-size: 30px;
	font-weight: bold;
	text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
	font-size: 13px;
	color:#000;
`;


export const FormInput = styled.input`
    padding: 16px 16px;
	margin-bottom: 32px;
	border: none;
	border-radius: 4px;
    border : 1px solid black;
`;


export const FormButton = styled.button`
    background: #2A265F;
	padding: 16px 0;
	border: none;
	border-radius:4px;
	color: #fff;
	font-size: 20px;
	cursor: pointer;
	font-weight:bold;
    margin-bottom : 50px;

	&:hover {
		background:#fff;
        color:#2A265F;
        border:1px solid #2A265F;
		
	}
`;

export const Text = styled.span`
    text-align: center;
	margin-top: 24px;
	color : #fff;
	font-size: 15px;
`;