import * as React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
} from "@chakra-ui/react"
import { Button, ButtonGroup } from '@chakra-ui/react'
import {useEffect, useState} from "react";
import axios from "axios";
import {useColorModeValue} from "@chakra-ui/color-mode";


const Dashboard =()=> {
    const [rows, setRows] = useState([]);

    useEffect( () => {
        async function fetchAPI() {
            const response = await axios.get('http://localhost:5000/partners/all');
            const reverse=response.data();
            setRows(reverse);

        }

        fetchAPI();
    }, [])

    const textColor = useColorModeValue("gray.700", "white")
// This is how the "tablesProjectData" imported above should look like
    const tablesProjectData = [
            {

                name: "Horizon UI Version",
                budget: "$14,000",
                status: "Working",
                progression: 60,
            },
            {

                name: "Add Progress Track",
                budget: "$3,000",
                status: "Canceled",
                progression: 10,
            },
            {

                name: "Fix Platform Errors",
                budget: "Not set",
                status: "Done",
                progression: 100,
            },
            {

                name: "Launch our Mobile App",
                budget: "$32,000",
                status: "Done",
                progression: 100,
            },
            {

                name: "Add the New Pricing Page",
                budget: "$400",
                status: "Working",
                progression: 25,
            },
        ];
    return(
    <Table variant="simple" color={textColor}>
        <Thead>
            <Tr my=".8rem" pl="0px">
                <Th pl="0px" color="gray.400">
                    Companies
                </Th>
                <Th color="gray.400">Budget</Th>
                <Th color="gray.400">Status</Th>
                <Th color="gray.400">Completion</Th>
                <Th color="gray.400">Completion</Th>
                <Th></Th>
            </Tr>
        </Thead>
        <Tbody>
            {tablesProjectData.map((row) => {
                return (
                                <Tr>
                                    <Td>inches</Td>
                                    <Td>millimetres (mm)</Td>
                                    <Td >25.4</Td>
                                    <Td ><Button colorScheme='blue'>Plus de détails</Button></Td>
                                </Tr>



                )
            })}
        </Tbody>
    </Table>
        );
}


export default Dashboard

