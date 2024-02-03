// Navbar.tsx
import React from 'react';
import { Box, Flex, Spacer,  useDisclosure, IconButton, Link, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Icon } from '@chakra-ui/react';
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex align="center"   color="Black" border={"1px"} borderColor="gray.200" p={"4"} shadow={"lg"}>
      <Link href="/" fontSize="xl" fontWeight="bold" fontFamily={"sans-serif"}>
        Blogeze
      </Link>

      {/* Desktop navigation */}
      <Spacer />
      <Box display={{ base: 'none', md: 'block' }} mr={"4"}>
        <Link href="/about" ml="4">
          About
        </Link>
        <Link href="/blog" ml="4">
          Blog
        </Link>
        <Link href="/contact" ml="4">
          Contact
        </Link>
      </Box>

      <Box  display={{ base: 'none', md: 'block' }}>|</Box>
      <Box ml="4" mr="4"  display={{ base: 'none', md: 'block' }}>
          <Icon as={FaInstagram} boxSize={6} />
          <Icon as={FaFacebook} boxSize={6} ml="3" />
          <Icon as={FaTwitter} boxSize={6} ml="3" />
          <Icon as={FaEnvelope} boxSize={6} ml="3" />
        </Box>
      
        <Box  display={{ base: 'none', md: 'block' }}>|</Box>
      
      <IconButton icon={<SearchIcon />} aria-label="Search" m={"4"} />

      {/* Mobile navigation */}
      <Box display={{ base: 'block', md: 'none' }}>
        <IconButton icon={<HamburgerIcon />} onClick={onOpen} aria-label="Open navigation" />
      </Box>

      {/* Mobile drawer */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Blogeze</DrawerHeader>
          <DrawerBody>
            <Flex flexDir="column">
            <Link href="/about" mb="2" onClick={onClose}>
              About
            </Link>
            <Link href="/blog" mb="2" onClick={onClose}>
              Blog
            </Link>
            <Link href="/contact" mb="2" onClick={onClose}>
              Contact
            </Link>

            <Icon as={FaInstagram} boxSize={6} />
            <Icon as={FaFacebook} boxSize={6} ml="3" />
            <Icon as={FaTwitter} boxSize={6} ml="3" />
            <Icon as={FaEnvelope} boxSize={6} ml="3" />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
