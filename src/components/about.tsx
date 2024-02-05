import React from 'react';
import { Box, Flex, Image, Heading, Text } from '@chakra-ui/react';
import Akash from "/photo.png";

const About : React.FC = () => {
    return (
    <Flex direction={{ base: 'column', md: 'row' }} align="center" p="8">
      <Box flex="1" mb={{ base: '4', md: '0' }}>
        <Heading mb="4">About Me - Akash Tayade</Heading>
        <Text>
          Hello there! 👋 I'm Akash Tayade, a passionate individual with a keen interest in technology, programming, and exploring the vast world of knowledge. Over our conversations, you've seen a glimpse of my curiosity and enthusiasm for learning and problem-solving.
        </Text>
        {/* Add other sections of the "About Me" here */}
      </Box>
      <Box ml={{ base: '0', md: '8' }} maxW="300px">
        <Image src={Akash} alt="Akash Tayade" borderRadius="md" />
      </Box>
    </Flex>
    )
}

export default About;