import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <Box display={"flex"} justifyContent={"space-around"}>
    <Link to={"/appointments"}><Heading size={"md"}>Appointments</Heading></Link>
    <Link to={"/login"}><Heading size={"md"}>Login</Heading></Link>
    <Link to={"/signup"}><Heading size={"md"}>Signup</Heading></Link>
</Box>
  )
}
