import Footer from "../Footer";
import Navbar from "../Nav";
import About from "./about";
import Blog from "./blog";
import hero from "/hero.jpg";
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';

const Landingpage:React.FC = () => {
    return (
        <>
        <Navbar/>
    {/* Hero section */}
    <Box
      bgImage={hero}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      h="400px" // Adjust the height as needed
      position="relative"
    >
      <Flex
        direction="column"
        align="start"
        justify="center"
        h="100%"
        p="8"
        bg="rgba(0, 0, 0, 0.6)" // Adjust the background overlay opacity as needed
      >
        <Heading color="white" fontSize="4xl" mb="4">
          Welcome to Blogeze
        </Heading>
        <Text color="white" fontSize="lg" mb="8">
          Explore the latest blogs and stay updated with our content.
        </Text>
        <Button color="black" size="lg">
          Read Blog
        </Button>
      </Flex>
    </Box>

    {/* Hero section end */}
    {/*Blog Section 8*/}
    <Blog/>
    {/*Blog Section end*/}
    {/*About Section*/}
    <About/>
    {/*Footer Section*/}
    <Footer/>
    {/*Footer Section end*/}

        </>
    )
}

export default Landingpage;