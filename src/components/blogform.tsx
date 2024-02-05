// BlogForm.js
import React, { useState} from 'react';
import { Input, Textarea, Button, VStack, FormControl, FormLabel } from '@chakra-ui/react';
import axios from 'axios';
import FileBase from 'react-file-base64';


const BlogForm : React.FC = () => {
  const [formData, setFormData] = useState({
    heading: '',
    description: '',
    tags: '',
    image: '',
  });

  const handleChange = (e, type) => {
    const { name, value } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, image: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = {
      title: formData.heading,
      message: formData.description,
      tags: formData.tags.split(','), // assuming tags are comma-separated
      selectedFile: formData.image,
    };
      console.log(formDataToSend);
    try {
      const response = await axios.post('api/v1/blogs/addblogs', formDataToSend);
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <VStack spacing="4" align="stretch" maxW="400px" m="auto">
      <FormControl>
        <FormLabel>Heading</FormLabel>
        <Input type="text" name="heading" value={formData.heading} onChange={(e) => handleChange(e, 'text')} />
      </FormControl>

      <FormControl>
        <FormLabel>Description</FormLabel>
        <Textarea name="description" value={formData.description} onChange={(e) => handleChange(e, 'text')} />
      </FormControl>

      <FormControl>
        <FormLabel>Tags</FormLabel>
        <Input type="text" name="tags" value={formData.tags} onChange={(e) => handleChange(e, 'text')} />
      </FormControl>

      <FormControl>
        <FormLabel>Image File</FormLabel>
        <FileBase type="file" multiple={false} onDone={({ base64 }) => handleChange({ target: { name: 'image', value: base64 } }, 'file')} />
      </FormControl>

      <Button colorScheme="teal" onClick={handleSubmit}>
        Submit
      </Button>
    </VStack>
  );
};

export default BlogForm;
