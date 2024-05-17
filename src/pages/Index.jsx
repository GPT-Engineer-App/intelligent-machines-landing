import { Container, Box, VStack, HStack, Text, Heading, Button, Image, IconButton, SimpleGrid } from "@chakra-ui/react";
import { FaRobot, FaBlog } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header */}
      <Box as="header" bg="orange.500" color="white" py={4} mb={8}>
        <HStack justifyContent="space-between" alignItems="center">
          <HStack spacing={4}>
            <FaRobot size="2em" />
            <Heading as="h1" size="lg">
              Intelligent Machines
            </Heading>
          </HStack>
          <Button colorScheme="whiteAlpha" variant="outline">
            Contact Us
          </Button>
        </HStack>
      </Box>

      {/* Main Content */}
      <VStack spacing={8} alignItems="flex-start">
        {/* Hero Section */}
        <HStack spacing={8} alignItems="center">
          <Box flex="1">
            <Heading as="h2" size="2xl" mb={4}>
              Meet Our Star Robot
            </Heading>
            <Text fontSize="lg" mb={4}>
              Our robots are designed to captivate and engage audiences at exhibition fairs. They are equipped with the latest AI technology to interact seamlessly with humans.
            </Text>
            <Button colorScheme="orange" size="lg">
              Learn More
            </Button>
          </Box>
          <Box flex="1">
            <Image src="https://images.unsplash.com/photo-1530859959281-d7f6ae0d48c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGV4aGliaXRpb258ZW58MHx8fHwxNzE1OTQ3NjQ5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Star Robot" borderRadius="md" />
          </Box>
        </HStack>

        {/* Blog Section */}
        <Box w="100%">
          <HStack justifyContent="space-between" mb={4}>
            <Heading as="h3" size="lg">
              From Our Blog
            </Heading>
            <IconButton aria-label="Blog" icon={<FaBlog />} size="lg" colorScheme="orange" />
          </HStack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            <Box borderWidth="1px" borderRadius="md" overflow="hidden">
              <Image src="https://placehold.co/600x400" alt="Blog Post 1" />
              <Box p={4}>
                <Heading as="h4" size="md" mb={2}>
                  The Future of Robotics
                </Heading>
                <Text>No one can predict the future, but we can shape it with our innovative robots.</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="md" overflow="hidden">
              <Image src="https://images.unsplash.com/photo-1593349480506-8433634cdcbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGlubm92YXRpb258ZW58MHx8fHwxNzE1OTQ3NjU3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Blog Post 2" />
              <Box p={4}>
                <Heading as="h4" size="md" mb={2}>
                  Innovations in AI
                </Heading>
                <Text>Discover the latest advancements in AI that power our robots.</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="md" overflow="hidden">
              <Image src="https://images.unsplash.com/photo-1536826340696-adb3811c02c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGV4aGliaXRpb258ZW58MHx8fHwxNzE1OTQ3NjU4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Blog Post 3" />
              <Box p={4}>
                <Heading as="h4" size="md" mb={2}>
                  Exhibition Highlights
                </Heading>
                <Text>Highlights from our recent exhibitions and the impact of our robots.</Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>

      {/* Footer */}
      <Box as="footer" bg="orange.500" color="white" py={4} mt={8}>
        <Text textAlign="center">&copy; {new Date().getFullYear()} Intelligent Machines. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;
