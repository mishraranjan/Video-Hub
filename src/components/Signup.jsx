import {
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Text,
  Avatar,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={16}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={8}
          w={['dull', 96]}
          m={'auto'}
          my={5}
        >
          <Heading alignSelf={'center'}>VIDEO HUB</Heading>
          <Avatar alignSelf={'center'} boxSize={32}/>
          <Input
            placeholder="Name"
            type={'text'}
            c
            required
            focusBorderColor={'purple.500'}
          />
          <Input
            placeholder="Email"
            type="email"
            required
            focusBorderColor={'purple.500'}
          />
          <Input
            placeholder="Password"
            type={'password'}
            required
            focusBorderColor={'purple.500'}
          />
             
          <Button
            alignSelf={'center'}
            colorScheme="purple"
            type={'submit'}
            w={150}
          >
            Sign Up
          </Button>
          <Text color={'purple.200'} textAlign={'right'} >Already A User?  <Link  color={'purple.200'}alignSelf={'flex-end'} to='/login' >Log in</Link></Text>
       
        </VStack>
      </form>
    </Container>
  );
}

export default Signup;
