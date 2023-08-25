import React from 'react';
import {
  Box,
  VStack,
  Input,
  Stack,
  Button,
  Heading,
  HStack,
  Text,
} from '@chakra-ui/react';
import {
  AiOutlineSend,
  AiOutlineCopyrightCircle,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineGithub,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={140} p={10} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} width={'full'} px={4}>
          <Heading size="md" textTransform={'uppercase'} textAlign={'center'}>
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid white'} borderRadius={'5px'}>
            <Input
              placeholder="Enter Email Here..."
              focusBorderColor="none"
              _focusVisible={'none'}
              border={'none'}
              outline={'none'}
              borderRadius={'none'}
            />
            <Button
              p={0}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          width={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            VIDEO HUB
          </Heading>
          <HStack>
            <Text>Copyrights Reserved</Text>
            <AiOutlineCopyrightCircle size={20} />
          </HStack>
        </VStack>
        <VStack width={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <HStack>
            <Button
              colorScheme={'purple'}
              variant={'ghost'}
              p={0}
              borderRadius={'full'}
            >
              <a
                href="https://www.instagram.com/whoranjanmishra/?next=%2F"
                target="blank"
              >
                <AiOutlineInstagram size={30} />
              </a>
            </Button>
            <Button
              p={0}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'full'}
            >
              {' '}
              <a href="https://github.com/mishraranjan" target="blank">
                <AiOutlineGithub size={30} />
              </a>
            </Button>
            <Button
              p={0}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'full'}
            >
              {' '}
              <a href="https://twitter.com/mishraranjan__" target="blank">
                <AiOutlineTwitter size={30} />
              </a>
            </Button>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
