import logo from './logo.svg';
import './App.css';
import React from "react";
import Login from "./component/Login";
import { ChakraProvider } from '@chakra-ui/react'
import Dashboard from "./component/Dashboard";
import Card from "./component/Dashboard/Workspace";
import Sidebar from "./component/Dashboard/Sidebar";
import Users from "./component/Dashboard/Users";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import SimpleSidebar from "./component/SideBar";
import Partner from "./component/Partner";
import {Box}from "@chakra-ui/react";
import {HStack} from "@chakra-ui/react";
import Action from "./component/Action";


function App() {
  return (
<ChakraProvider>
        <div className="App">
            <HStack>
            <SimpleSidebar/>
            <Action/>
            </HStack>
        </div>
</ChakraProvider>
  );
}

export default App;
