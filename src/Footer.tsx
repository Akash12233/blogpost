// Footer.tsx
import React from 'react';
import { Box, Heading, Flex, Input, Button, HStack, Icon, Link, Text } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import  axios  from 'axios';

const Footer: React.FC = () => {
  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement logic to handle the email submission
    const email =e.currentTarget.email.value;
    console.log(email);
  
    try {
      const response =  axios.post('api/v1/emails/getemail',{ email: email });
      console.log(response);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    // Clear the input field if needed
    e.currentTarget.email.value = '';
  };

  return (
    <Box bg="gray.200" p="8" mt="8">
      <Flex direction="column" align="center">
        <Heading mb="4">Follow my lifestyle on Instagram</Heading>
        <HStack spacing="4">
          <Link href="https://www.instagram.com/" isExternal>
            <Icon as={FaInstagram} boxSize={6} />
          </Link>
          <Link href="https://www.twitter.com/AkashTa47332668" isExternal>
            <Icon as={FaTwitter} boxSize={6} />
          </Link>
          <Link href="https://www.github.com/Akash12233" isExternal>
            <Icon as={FaGithub} boxSize={6} />
          </Link>
          <Link href="https://www.linkedin.com/in/akash-tayade-23453322a/" isExternal>
            <Icon as={FaLinkedin} boxSize={6} />
          </Link>
        </HStack>
      </Flex>

      <Flex mt="8" direction={{ base: 'column', md: 'row' }} justify="space-between">
        <Box>
          <Text mb="4">Thanks for coming to Blogeze, and join me for more updates!</Text>
          <form onSubmit={handleEmailSubmit}>
            <Flex>
              <Input type="email" name="email" placeholder="Enter your email" required />
              <Button type="submit" colorScheme="teal" ml="2">
                Subscribe
              </Button>
            </Flex>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
