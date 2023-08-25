import { Container, VStack, HStack, Input, Button } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

function Upload() {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p16>
      <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'} />
        <form>
          <HStack>
            <Input
              required
              type="file"
              css={{
                '&::file-selector-button': {
                  border: 'none',

                  width: 'calc(110% + 30px)',
                  height: '100%',
                  fontWeight: 'bold',
                  marginLeft: '-10px',
                  color: 'purple',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                },
              }}
            />
            <Button colorScheme={'purple'} type={'submit'}>
              Upload
            </Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
}

export default Upload;
