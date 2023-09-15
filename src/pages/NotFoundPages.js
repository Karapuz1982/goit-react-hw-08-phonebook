import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const NotFoundPage = () => {
  return (
    <Flex align="center" justify="center" h="75vh">
      <Box w="sm">
        <Heading textAlign="center" size="4xl" mb={6}>
          404
        </Heading>
        <Text as="p" textAlign="center" fontSize="md">
          The page you are looking for may have been moved, deleted, or possibly
          never existed.
        </Text>
      </Box>
    </Flex>
  );
};

export default NotFoundPage;