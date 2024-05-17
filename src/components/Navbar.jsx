import { Box, HStack, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box as="nav" bg="orange.500" color="white" py={4} mb={8}>
      <HStack justifyContent="space-between" alignItems="center" maxW="container.xl" mx="auto" px={4}>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold">
            Intelligent Machines
          </Link>
        </HStack>
        <HStack spacing={4}>
          <Button as={RouterLink} to="/contact" colorScheme="whiteAlpha" variant="outline">
            Contact Us
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;
