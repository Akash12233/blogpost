import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Navbar from "../Nav";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { formatDistanceToNow } from 'date-fns';
import { Input, InputGroup, InputRightElement, IconButton } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

interface Blog {
  id: number;
  title: string;
  message: string;
  tags: [string];
  selectedFile: string;
  createdAt: string;
}

const Allblogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const [searchQuery, setSearchQuery] = useState('');

  

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('api/v1/blogs/getblogs');
        setBlogs(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogs();
  }, []);


  const onSearch = (query) => {
    setSearchQuery(query);
    
  };

  return (
    <>
      <Navbar />

        <InputGroup>
        <Input
          type="text"
          placeholder="Search..."
          onChange={(e) => onSearch(e.target.value)}
        />
        <InputRightElement>
          <IconButton
            icon={<SearchIcon />}
            aria-label="Search"
            onClick={onSearch}
          />
        </InputRightElement>
      </InputGroup>

      <Flex mt="4" flexWrap="wrap">
      {blogs.map((blog) => (
        blog.tags.map((tag) => {
          if (tag === searchQuery) {
            return (
              <Box  maxW="300px" borderWidth="1px" borderRadius="lg" overflow="hidden" m="2">
                <Image src={blog.selectedFile} alt="Blog Image" w="100%" h="150px" objectFit="cover" />
                <Box p="4">
                  <Text fontSize="xl" fontWeight="bold" mb="2">{blog.title}</Text>
                  <Text fontSize="lg" fontWeight="bold" mb="2">{blog.message}</Text>
                  <Text fontSize="sm" color="gray.500" mb="2">{blog.tags}</Text>
                  <Text fontSize="sm" color="gray.500">{formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}</Text>
                </Box>
              </Box>
            );
          }
          if(searchQuery===''){
            return (
              <Box  maxW="300px" borderWidth="1px" borderRadius="lg" overflow="hidden" m="2">
                <Image src={blog.selectedFile} alt="Blog Image" w="100%" h="150px" objectFit="cover" />
                <Box p="4">
                  <Text fontSize="xl" fontWeight="bold" mb="2">{blog.title}</Text>
                  <Text fontSize="lg" fontWeight="bold" mb="2">{blog.message}</Text>
                  <Text fontSize="sm" color="gray.500" mb="2">{blog.tags}</Text>
                  <Text fontSize="sm" color="gray.500">{formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}</Text>
                </Box>
              </Box>
            );
          }
          return null; // If the tag doesn't match, return null
        })
      ))}
    </Flex>

      <Footer />
    </>
  );
};

export default Allblogs;
