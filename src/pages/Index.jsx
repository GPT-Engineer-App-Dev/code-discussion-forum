// Update this page (the content is just a fallback if you fail and example)
// Use chakra-ui
import { Container, Text, VStack, Heading, Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// Example of using react-icons
// import { FaRocket } from "react-icons/fa";
// <IconButton aria-label="Add" icon={<FaRocket />} size="lg" />; // IconButton would also have to be imported from chakra

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Tech Discussions Forum</Heading>
        <Text fontSize="lg">Join the community and start discussing the latest in tech!</Text>
        <Box>
          <Link to="/forum">
            <Button colorScheme="teal" size="lg">Enter Forum</Button>
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
