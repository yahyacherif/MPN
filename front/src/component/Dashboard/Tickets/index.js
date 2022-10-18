import React, { Component, useState, useEffect,useMemo } from 'react';
import { GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import SecurityIcon from '@mui/icons-material/Security';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import axios from 'axios';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './Tickets.css'
import {
    DataGrid,
    GridColDef,
    GridApi,
    GridCellValue,
    GridCellParams
} from "@mui/x-data-grid";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
} from "@mui/material";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import {Modal as Confirm} from 'antd' ;
const { confirm } = Confirm;



export default function Tickets() {
    const initialState={
        name:"",
        id:"",
        type:"",
        email:"",
        users:[],
    }
    const [rows, setRows] = useState([]);
    const [selectedRow,setsetletctedRow]=useState({...initialState});
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [disabled, setDisabled] = useState(false)

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        clear:'right',
        p: 4,
    };

    useEffect( async () => {
        const response = await axios.get('https://pelemelefest.com/api/bookings/all');
        const reverse=response.data.reverse();
        setRows(reverse);
        const intervalId = setInterval(() => {

            async function fetchAPI() {
                const response = await axios.get('https://pelemelefest.com/api/bookings/all');
                const reverse=response.data.reverse();
                setRows(reverse);

            }

            fetchAPI();
          }, 5000)

          return () => clearInterval(intervalId); //This is important






    }, [])

    const deleteTicket = React.useCallback(
        (params) => () => {

            confirm({
                title: `Do you Want to delete ${params.row.firstName} ${params.row.name}'s ticket?`,
                icon: <ExclamationCircleOutlined/>,
                onOk() {
                    axios.delete(`https://pelemelefest.com/api/bookings/delete/${params.id}`)
                    setRows((prevRows) => prevRows.filter((row) => row.id !== params.id));
                },
                onCancel() {
                    console.log('Cancel');
                },
            });
        }
    )
    const rejectTopass= React.useCallback(
        (params) => () => {

            confirm({
                title: `Do you Want to reject to pass ${params.row.firstName} ${params.row.name}'s ticket?`,
                icon: <ExclamationCircleOutlined/>,
                onOk() {
                    axios.delete(`https://pelemelefest.com/api/bookings/reject/${params.id}`)
                    setRows((prevRows) => prevRows.filter((row) => row.id !== params.id));
                },
                onCancel() {
                    console.log('Cancel');
                },
            });
        }
    )

    const showDetails = React.useCallback(

        (params) => () => {
            setTimeout(() => {
                console.log(params.row)
                setsetletctedRow(params.row)
                setOpen(true);

            });
        },
        [],
    );
    const confirmTicket = React.useCallback(

        (params) => () => {
            confirm({
                title: `Do you Want to confirm ${params.row.firstName} ${params.row.name}'s ticket?`,
                icon: <ExclamationCircleOutlined/>,
                onOk() {
                  return  axios.put(`https://pelemelefest.com/api/bookings/approve/${params.id}`),
                          console.log('ok')},
                onCancel() {
                    console.log('Cancel');
                },
            });


        },
        [],
    );
    const confirmPayment = React.useCallback(
        (params) => () => {
            confirm({
                title: `Do you Want to pay ${params.row.firstName} ${params.row.name}'s ticket?`,
                icon: <ExclamationCircleOutlined/>,
                onOk() {
                    return   axios.put(`https://pelemelefest.com/api/bookings/pay/${params.id}`),
                        console.log('ok')},
                onCancel() {
                    console.log('Cancel');
                },
            });


        },
        [],
    );
    const confirmGuest = React.useCallback(
        (params) => () => {
            confirm({
                title: `Do you Want to set ${params.row.firstName} ${params.row.name} as a guest ?`,
                icon: <ExclamationCircleOutlined/>,
                onOk() {
                    return   axios.put(`https://pelemelefest.com/api/bookings/guest/${params.id}`),
                        console.log('ok')},
                onCancel() {
                    console.log('Cancel');
                },
            });


        },
        [],
    );


    const columns =useMemo(
        () =>
            [
                { field:'id',headerName: 'ID', type: 'string',width:'50' ,flex:1},
                { field: 'type', headerName: 'Type',type: 'string',width:'150',
                    valueFormatter: ({ value }) => {
                        if (value=='double'){
                            return 'DUO 2 days'
                        } else if (value=='triple'){
                            return 'TRIO 2 days'
                        } else if (value=='two-day-pass'){
                            return 'PASS 2 days'
                        } else if (value=='one-day-pass-first-day') {
                            return 'PASS day 1'
                        }
                        else if (value=='back-stage-guest') {
                            return 'Back Stage Guest'
                        }
                        else if (value=='front-stage-guest') {
                            return 'Front stage Guest'
                        }else if (value=='double-day-1') {
                            return 'DUO day 1 '
                        } else if (value=='double-day-2') {
                            return 'DUO day 2'
                        }else if (value=='triple-day-1') {
                            return 'TRIO day 1'
                        } else if (value=='triple-day-2') {
                            return 'TRIO day 2'
                        }
                        else {
                            return 'PASS DAY 2'
                        }
                    },
                },
                {
                    field: 'details',
                    type: 'actions',
                    headerName:'Details',
                    width: 130,
                    valueOptions: ({ row }) => {
                        if (row === undefined) {
                            return ['false'];
                        }
                        const options = [];
                        if (!['true'].includes(row.approved)) {
                        }
                        return options;
                    },
                    renderCell: (params) => [
                        <div>
                            <Button
                                variant="contained"
                                color="secondary"
                                size="small"
                                onClick={showDetails(params)}
                            >details</Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Details
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                                        ID : {selectedRow.id}
                                        <br/>
                                        Type : {selectedRow.type}
                                        <br/>
                                        Visitors : {selectedRow.users.map((user, i) => (
                                        <div>
                                            Visitor {i + 1} :
                                            <br/>
                                            Name : {user.name}
                                            <br/>
                                            firstName : {user.firstName}
                                            <br/>
                                            FB/insta: <a className="fb_link" href={user.social_link.toLowerCase()} target='_blank'>{user.social_link.toLowerCase()}</a>
                                            <br/>
                                            phone : {user.phone}
                                            <br/>
                                            email : {user.email}
                                            <br/></div>))}
                                    </Typography>
                                </Box>
                            </Modal>
                        </div>
                    ],
                },
                { field: 'name', headerName: 'Name',type: 'string',width:'150'},
                { field: 'firstName', headerName: 'First name',type: 'string',width:'150'},
                { field: 'approved', headerName: 'Status',type: 'string' ,flax:0.5,
                    valueOptions: [
                        'true',
                        'false',
                    ],
                    valueFormatter: ({ value }) => {
                    if(value) return "approved"
                        else return "waiting"
                    },

                },
                { field: 'payed', headerName: 'Payed',type: 'string' ,flax:0.6},

                {
                    field: 'actions',
                    type: 'actions',
                    headerName:'Delete',
                    width: 80,
                    getActions: (params) => [
                        <GridActionsCellItem
                            icon={<DeleteIcon />}
                            label="Delete"
                            onClick={deleteTicket(params)}
                        />,

                    ],
                },
                {
                    field: 'confirm',
                    type: 'actions',
                    headerName:'Confirm',
                    width: 130,
                    valueOptions: ({ row }) => {
                        if (row === undefined) {
                        }
                        const options = [];
                        if (!['true'].includes(row.approved)) {
                        
                        }
                        return options;
                    },
                    getActions: (params) => [
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={params.row.approved}
                            size="small"
                            onClick={confirmTicket(params)}
                        >confirm </Button>
                    ],
                },
                {
                    field: 'action',
                    type: 'actions',
                    headerName:'Delete-p',
                    width: 130,
                    valueOptions: ({ row }) => {
                        if (row === undefined) {
                        }
                        const options = [];
                        if (!['true'].includes(row.approved)) {
                        }
                        return options;
                    },
                    renderCell: (params) => [
                        <Button
                            variant="contained"
                            color="error"
                            disabled={params.row.payed != 'waiting'}
                            size="small"
                            onClick={rejectTopass(params)}
                        >delete-p</Button>
                    ],
                },
                {
                    field: 'pay',
                    type: 'actions',
                    headerName:'Pay with cash',
                    width: 130,
                    valueOptions: ({ row }) => {
                        if (row === undefined) {
                        }
                        const options = [];
                        if (!['true'].includes(row.approved)) {
                        }
                        return options;
                    },
                    renderCell: (params) => [
                        <Button
                            variant="contained"
                            color="success"
                            disabled={params.row.payed != 'waiting'}
                            size="small"
                            onClick={confirmPayment(params)}
                        >cash</Button>
                    ],
                },
                {
                    field: 'guest',
                    type: 'actions',
                    headerName:'Guest',
                    width: 130,
                    renderCell: (params) => [
                        <Button
                            variant="contained"
                            color="warning"
                            disabled={params.row.payed != 'waiting'}
                            size="small"
                            onClick={confirmGuest(params)}
                        >guest</Button>
                    ],
                },

            ]


    );

    return (
        <>
        <h2>Tickets ({rows.length})</h2> 
        <div style={{ height: 500, width: '100%'}}>
            <DataGrid columns={columns} rows={rows} />
        </div>
        </>
    );
}