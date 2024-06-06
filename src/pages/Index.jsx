import { Container, VStack, Heading, Text, Box, Button } from "@chakra-ui/react";
import { FaComments } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" textAlign="center">Tech Forum</Heading>
        <Text fontSize="lg" textAlign="center">Join the conversation and discuss the latest in technology.</Text>
        <Box>
          <Button leftIcon={<FaComments />} colorScheme="teal" size="lg">
            Enter Forum
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;