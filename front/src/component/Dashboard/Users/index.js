import React, { Component, useState, useEffect,useMemo } from 'react';
import axios from 'axios';
import {
    DataGrid,
    GridColDef,
    GridApi,
    GridCellValue,
    GridCellParams
} from "@mui/x-data-grid";
import clsx from 'clsx';

import Box from '@mui/material/Box';


export default function Users() {

    const [rows, setRows] = useState([]);



    useEffect( () => {
        async function fetchAPI() {
            const response = await axios.get('http://localhost:5000/partners/all');
            const reverse=response.data();
            setRows(reverse);

        }

        fetchAPI();
    }, [])

    const columns =useMemo(
        () =>
            [
                { field: 'name', headerName: 'Name',type: 'string',width:'150'},
                { field: 'firstName', headerName: 'First Name',type: 'string',width:'150'},
                { field: 'phone', headerName: 'phone',type: 'string',width:'150'},
                { field: 'email', headerName: 'email',type: 'string',width:'300'},
                { field: 'social_link', headerName: 'Facebook Link', width:'500',
                    renderCell: (params) =>
                        <a  className="fb_link" href={params.row.social_link}>{params.row.social_link}</a>,
                },
                {field:'approved',headerName:'approved'},
                {field:'guest',headerName:'guest'},
            ]


    );

    return (
        <>
            <h2>Users ({rows.length})</h2>
            <Box
                sx={{
                    width: "100%",

                    '& .super-app--true--false': {
                        backgroundColor: 'rgba(157, 255, 118, 0.49)',
                        color: '#1a3e72',
                        fontWeight: '600',
                    },
                    '& .super-app--true--true': {
                        backgroundColor: 'rgb(233,222,36)',
                        color: '#1a3e72',
                        fontWeight: '600',
                    },
                    '& .super-app--false--false': {
                        backgroundColor: '#d47483',
                        color: '#1a3e72',
                        fontWeight: '600',
                    },
                }}
            >
            <div style={{ height: 500, width: '100%'}}>
                <DataGrid columns={columns} rows={rows}  getRowClassName={(params) =>
                    `super-app--${params.getValue(params.id, 'approved')}--${params.getValue(params.id, 'guest')}`
                }/>
            </div>
            </Box>
        </>
    );
}