import React, { Component, useState } from 'react';
import { Background, ModalWrapper, Form, FormButton, FormH1, FormInput, FormLabel, Text, CloseModalButton} from './ModalElements';
import { ToastContainer, toast } from 'react-toastify';
import {  withRouter  } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

export default function Modal({showModal, openModal}) {

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: '25ch',
        },
      }));

      const classes = useStyles();
   

    const [values, setValues] = useState({
        title: '',
        genre_id: '',
    });

    const handleChange = input=> e => {
        const data = {...values}
        data[e.target.name] = e.target.value;
        setValues(data);
    }


    const handleSubmit = async event => {
        event.preventDefault();
        
        try{
            const { data }  = await http.post('http://localhost:5000/api/movies', values);
            //history.push("/home");
            toast.success('Successful');
        } catch(error){
            toast.error("Failed")
        }
    
    }

   
        
        return ( 
            <>
                { showModal ? (
                    <Background>
                        <ModalWrapper showModal={showModal}>
                        <ToastContainer position="top-right" autoClose={10000}/>
                            <CloseModalButton onClick={openModal}></CloseModalButton> 
                            <Form onSubmit={handleSubmit}>
                                <FormH1>Schedule a session</FormH1>
                                <TextField
                                    id="outlined-full-width"
                                    label="Label"
                                    style={{ margin: 8 }}
                                    placeholder="Title"
                                    name="title"
                                    onChange={handleChange('title')}
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                                 <TextField
                                id="outlined-full-width"
                                label="Label"
                                style={{ margin: 8 }}
                                placeholder="Genre"
                                name="genre_id"
                                onChange={handleChange('genre_id')}
                                onChange={handleChange('title')}
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                            />
                                
                                <FormButton type="submit">Submit</FormButton>                
                            </Form>
                           
                            
                        </ModalWrapper>
                    </Background>
                ) : null }
            </>
         );
    
}
 
