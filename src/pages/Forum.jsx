import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Forum = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl">Forum</Heading>
        <Text>Welcome to the tech discussions forum. Here you can share your thoughts and insights on the latest in technology.</Text>
        {/* Forum content will go here */}
      </VStack>
    </Box>
  );
};

export default Forum;