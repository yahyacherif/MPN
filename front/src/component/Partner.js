import React from 'react'
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Link,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement,
    FormLabel,
    Select
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);








const Partner =()=>{
    return(
        <Flex
            flexDirection="column"
            width="100%"
            height="100vh"
            backgroundColor="gray.200"
            justifyContent="center"
            alignItems="center"
        >
            <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
            >
                <Heading color="teal.400">Détails partenaire</Heading>
                <Box minW={{ base: "90%", md: "700px" }}>

                    <form >
                        <Stack
                            spacing={4}
                            p="1rem"
                            backgroundColor="whiteAlpha.900"
                            boxShadow="md"
                        >
                            <FormControl>
                                <FormLabel >Raison Social</FormLabel>
                                <InputGroup>


                                    <Input name="email" type="text" placeholder="email address" />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <FormLabel >MPN ID</FormLabel>
                                <InputGroup>


                                    <Input name="email" type="text" placeholder="email address" />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <FormLabel >Numéro contact</FormLabel>
                                <InputGroup>


                                    <Input name="email" type="text" placeholder="email address" />
                                </InputGroup>

                            </FormControl>
                            <FormControl>
                                <FormLabel >Email contact</FormLabel>
                                <InputGroup>


                                    <Input name="email" type="text" placeholder="email address" />
                                </InputGroup>

                            </FormControl>
                            <FormControl>
                                <FormLabel >Email Contact</FormLabel>
                                <InputGroup>


                                    <Input name="email" type="text" placeholder="email address" />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Situation actuelle</FormLabel>
                                <Select placeholder='Select country'>
                                    <option>United Arab Emirates</option>
                                    <option>Nigeria</option>
                                </Select>
                            </FormControl>

                            <Button
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                colorScheme="teal"
                                width="full"

                            >
                                Mettre à jour
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Stack>
        </Flex>
    )
}

export default Partner