import { Box, Flex, Heading,} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
     
    
    <Flex align="center" justify="center" h="75vh">
      <motion.div
            className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
>
      
          <Box bg="red.200" shadow="2xl" rounded="md" w="600px" p={30} textAlign={"Center"}>
            <Heading as="h1" fontSize={27} fontWeight={700} m={6}>
              Welcome to PhoneBook
                 
            </Heading>
       
          </Box>
       
       </motion.div>
    </Flex>
  );
};

export default HomePage;