import React from "react";
import { Box, Flex, Link, Text, Icon, VStack, HStack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
 
export  const Footer2 = () => {
  return (
    <Box bg="teal.400" w={"100vw"} color="white" py={10} px={5}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="flex-start"
        wrap="wrap"
        maxW="1200px"
        mx="auto"
      >
        {/* Left section (Logo and Social Icons) */}
        <VStack align="flex-start" mb={5}>
          <Text fontSize="xl" fontWeight="bold">
            LOGO
          </Text>
          <HStack spacing={5}>
            <Link href="https://facebook.com" isExternal>
              <Icon as={FaFacebook} boxSize="24px" />
            </Link>
            <Link href="https://instagram.com" isExternal>
              <Icon as={FaInstagram} boxSize="24px" />
            </Link>
            <Link href="https://twitter.com" isExternal>
              <Icon as={FaTwitter} boxSize="24px" />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <Icon as={FaLinkedin} boxSize="24px" />
            </Link>
          </HStack>
        </VStack>

        {/* Center sections (Links) */}
        <Flex justify="space-between" w="full" maxW="800px">
          <VStack align="flex-start">
            <Link href="#">Company</Link>
            <Link href="#">About Us</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Press</Link>
            <Link href="#">Blog</Link>
          </VStack>
          <VStack align="flex-start">
            <Link href="#">Support</Link>
            <Link href="#">Contact Support</Link>
            <Link href="#">Help Center</Link>
            <Link href="#">FAQ</Link>
          </VStack>
          <VStack align="flex-start">
            <Link href="#">Legal</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </VStack>

          <VStack align="flex-start">
            <Link href="#">Follow Us</Link>
            <Link href="#">Twitter</Link>
            <Link href="#">LinkedIn</Link>
            <Link href="#">Facebook</Link>
          </VStack>
        </Flex>
      </Flex>
    </Box>
  );
};

