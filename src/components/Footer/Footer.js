import React from 'react';
import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.800" py={4} color="white">
          <Flex justify="center" align="center">
               
        <Link
          href="https://www.linkedin.com/in/andrii-pizniur-8a9668266/"
          isExternal 
          _hover={{ textDecoration: 'underline' }} 
        >
         <Text>&copy; 2023 ANDRII PIZNIUR</Text>
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
