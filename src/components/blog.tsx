// Blog.tsx
import React, { useState, useEffect } from 'react';
import { Input, Link } from '@chakra-ui/react';
import { Box, Flex, Heading, Spacer, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Portal
} from '@chakra-ui/react'
import axios from 'axios';
import { formatDistanceToNow } from 'date-fns';

interface Blog {
  id: number;
  title: string;
  message: string;
  tags: string;
  selectedFile: string;
  createdAt: string;
}
const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [pass, setpass]=useState("");
  const navigate=useNavigate();

  useEffect(() => {
    // Fetch blog data from API
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

  const handleclick=()=>{
    if(pass==="Ak@sh123"){
      navigate("/blogform");
    }
  }

  return (
    <Box mt="8">
      <Flex  align="center">
        <Heading>Blogs Post</Heading>
        <Spacer/>
        <Popover>
            <PopoverTrigger>
              <Button mr={2}>post</Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <Input
                  value={pass}
                  onChange={(e) => setpass(e.target.value)}
                  placeholder="password"
                  color={"black"}
                />
                <PopoverCloseButton />
                <PopoverBody>
                  <Button color="black" onClick={handleclick}>Button</Button>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
        <Link ml="4" href="/allblogs">view all blogs</Link>
      </Flex>

      {/* Render individual blog cards */}
      <Flex mt="4" flexWrap="wrap">
        {blogs.slice(0, 4).map((blog) => (
          <Box key={blog.id} maxW="300px" borderWidth="1px" borderRadius="lg" overflow="hidden" m="2">
          <Image src={blog.selectedFile} alt="Blog Image" w="100%" h="150px" objectFit="cover" />
          <Box p="4">
            <Text fontSize="xl" fontWeight="bold" mb="2">{blog.title}</Text>
            <Text fontSize="lg" fontWeight="bold" mb="2">{blog.message}</Text>
            <Text fontSize="sm" color="gray.500" mb="2">{blog.tags}</Text>
            <Text fontSize="sm" color="gray.500">{formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}</Text>
          </Box>
        </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Blog;
