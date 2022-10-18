import React, { Component, useState, useEffect } from 'react';
import { Container } from './WorkspaceElements';
import * as FaIcons from 'react-icons/fa';
import axios from 'axios';
import {BrowserRouter, Route, Routes, Outlet} from "react-router-dom";
import { makeStyles } from '@mui/styles';
import Sidebar from '../Sidebar';



const columns = [
    { id: 'id', label: 'ID', minWidth: 170 },
    { id: 'name', label: 'Name', minWidth: 100 },
    {
      id: 'email',
      label: 'Email',
      minWidth: 170,
      align: 'left',
    },
    {
      id: 'username',
      label: 'Username',
      minWidth: 170,
      align: 'left',
    },
    
  ];

  const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
  });
  
  
export default function Card() {

    const [data, setData] = useState([]);



    useEffect(  () => {
        async function fetchAPI() {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setData(response.data);


        }

        fetchAPI();
      }, [])




    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };



        return ( 
            <>
            <Sidebar />
        
            <Container>
           <h1>Tableau de bord</h1> 

            <Outlet></Outlet>
          
        
        
            </Container>
            
                
    

            </>
        );
    
}
