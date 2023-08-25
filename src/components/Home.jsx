import { Box, Text, Container, Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import { Image } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3 .jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions ={
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransform:"uppercase",
    p:"4",
    size:"4"
};

const Home = () => {
  return(
  <Box>
    <MyCarousel />
    <Container minH={'100vh'} maxW={'container.xl'} p="16">
        <Heading textTransform={'uppercase'} py="2" w={'fit-content'} borderBottom={'2px solid purple'}  m="auto">Services</Heading>
        <Stack 
        h='full'
        p={4}
        alignItems={'center'}
        direction={['column','column','row']}>
<Image src={img5} alt="img5" h={['40','400']} filter={'hue-rotate(-140deg)'} />
<Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni dolor, officia optio veritatis explicabo quia blanditiis eos perspiciatis reiciendis excepturi sed vero, esse ut voluptate ab vel voluptatum, nulla enim rem et? Rerum ipsa saepe, ratione, minima ullam possimus consequuntur ipsum sint iste sunt dolore provident pariatur repellendus, adipisci labore?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi saepe tempora minus delectus harum temporibus iure vel a, amet molestias blanditiis iste eaque, magnam nam, earum sequi aliquid repellendus distinctio.</Text>
        </Stack>
    </Container>
  </Box>
)};
const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box 
    w={'full'}
    h={'100vh'}
    >
<img src={img1} alt='img1' />
<Heading bgColor={"blackAlpha.600"} color={'white'}{...headingOptions}>Watch The Future</Heading>
    </Box>
    <Box 
    w={'full'}
    h={'100vh'}
    >
<img src={img2} alt='img2'/>
<Heading bgColor={"whiteAlpha.600"} color={'white'}{...headingOptions}>Future is Gaming</Heading>
    </Box>
    <Box 
    w={'full'}
    h={'100vh'}
    >
<img src={img3} alt='img3'/>
<Heading bgColor={"whiteAlpha.600"} color={'white'}{...headingOptions}>Gaming on Console</Heading>
    </Box>
    <Box 
    w={'full'}
    h={'100vh'}
    >
<img src={img4} alt='img4'/>
<Heading bgColor={"whiteAlpha.600"} color={'white'}{...headingOptions}>Night life is cool</Heading>
    </Box>
  </Carousel>
);

export default Home;
