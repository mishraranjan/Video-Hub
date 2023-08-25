import {
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={16}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={8}
          w={['dull', 96]}
          m={'auto'}
          my={16}
        >
          <Heading alignSelf={'center'}>Welcome Back</Heading>
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
          <Button variant={'none'} alignSelf={'flex-end'}>
            <Link to="/forgetpassword">Forget Password</Link>
          </Button>
          <Button
            alignSelf={'center'}
            colorScheme="purple"
            type={'submit'}
            w={150}
          >
            Login
          </Button>
          <Text color={'purple.200'} textAlign={'right'}>
            New User? <Link to="/signup"> Sign Up</Link>
          </Text>
        </VStack>
      </form>
    </Container>
  );
}

export default Login;
