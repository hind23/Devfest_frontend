

import React from "react";
import { NavLink } from "react-router-dom";
import AuthNavbar from "components/Navbars/AuthNavbar";
// Chakra imports
import {
  Box,
  Flex,
  Button,
  Circle,
  Heading,
  Link,HStack,Icon,
  InputGroup,
  InputRightElement,
  Text,Avatar,VStack,
  useColorModeValue,
  useBreakpointValue
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

// Assets
import signInImage from "assets/img/signInImage.png";
import first from "assets/svg/first.svg";
import second from "assets/svg/second.svg";
import third from "assets/svg/third.svg";
import features from "assets/svg/features.svg";
import feedbacks from "assets/svg/feedbacks.svg";
import fourth from "assets/svg/fourth.svg";
import {Footer2} from "components/Footer/Footer2";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import bgImg from "assets/svg/bgImg.svg"
import bgimage from "assets/svg/bgimage.svg";

function Landing() {
  const iconSize = useBreakpointValue({ base: "40px", md: "50px" });
  const testimonials = [
    {
      name: "Aurelia Mathews",
      title: "CEO, BrightFuture Inc.",
      image: first,
      text: "This agency transformed our business!"
    },
    // Add more testimonials as needed
    {
      name: "Aurelia Mathews",
      title: "CEO, BrightFuture Inc.",
      image: first,
      text: "This agency transformed our business!"
    },
    {
      name: "Aurelia Mathews",
      title: "CEO, BrightFuture Inc.",
      image: first,
      text: "This agency transformed our business!"
    },
    {
      name: "Aurelia Mathews",
      title: "CEO, BrightFuture Inc.",
      image: first,
      text: "This agency transformed our business!"
    },
    {
      name: "Aurelia Mathews",
      title: "CEO, BrightFuture Inc.",
      image: first,
      text: "This agency transformed our business!"
    },
    {
      name: "Aurelia Mathews",
      title: "CEO, BrightFuture Inc.",
      image: first,
      text: "This agency transformed our business!"
    },
    {
      name: "Aurelia Mathews",
      title: "CEO, BrightFuture Inc.",
      image: first,
      text: "This agency transformed our business!"
    },
    {
      name: "Aurelia Mathews",
      title: "CEO, BrightFuture Inc.",
      image: first,
      text: "This agency transformed our business!"
    },
    {
      name: "Aurelia Mathews",
      title: "CEO, BrightFuture Inc.",
      image: first,
      text: "This agency transformed our business!"
    },
    {
      name: "Aurelia Mathews",
      title: "CEO, BrightFuture Inc.",
      image: first,
      text: "This agency transformed our business!"
    }
  ];
  // Chakra color mode
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.400", "white");
  return (
    <Box >
      <AuthNavbar/>
<Flex  position='relative' mb='40px' h={"100vh"} flexDir={"row"}>
      <Flex
        h={{ sm: "initial", md: "75vh", lg: "85vh" }}
        w='100%'
        maxW='1044px'
        mx='auto'
        justifyContent='space-between'
        mb='30px'
        pt={{ sm: "100px", md: "0px" }}>
        <Flex
          alignItems='center'
          justifyContent='start'
          style={{ userSelect: "none" }}
          w={{ base: "100%", md: "30%", lg: "42%" }}>
          <Flex
            direction='column'
            w='100%'
            background='transparent'
            align={"center"}
            spac
            p='48px'
            mt={{ md: "150px", lg: "80px" }}>
            <Heading display={"block"} marginLeft={"auto"} marginRight={"auto"} textAlign={"center"} color={"#041039"} fontSize='70px' mb='10px'>
           Manage your Finances Efficiently
            </Heading>
           <Button backgroundColor={"#041039"} w={"150px"} color={"white"} py={6} rounded={"full"}>
            Get Started
           </Button>
   
          </Flex>
        </Flex>
        <Box
          display={{ base: "none", md: "block" }}
          overflowX='hidden'
          h='100%'
          w='40vw'
          position='absolute'
          right='0px'>
          <Box
            bgImage={bgimage}
            w='100%'
            h='100%'
            bgSize='cover'
            bgPosition='30%'
            position='absolute'
            borderBottomLeftRadius='20px'></Box>
        </Box>
      </Flex>
   
    </Flex>




    <Image
mt={"50px"}
      src={features}
      alt="Description of the image"
      w={"30%"}
    />
    <Flex marginLeft={"auto"} alignItems={"center"} marginRight={"auto"} justifyContent={"space-around"}  flexDirection="row"> 
  <Flex flexDirection="column" alignContent={"center"}>
  <Box
      maxW="lg"
      overflow="hidden"
      p={6}
    >
           <Circle
          size={iconSize}
          bg="teal.400"
          color="white"
          fontWeight="bold"
          mr={3}
        >
          1
        </Circle>
      <Flex alignItems="center" mb={4}>
        {/* Numbered Icon */}
   
        {/* Main Heading */}
        <Heading as="h2" size="lg">
          Real-Time Insights Dashboard
        </Heading>
      </Flex>

      {/* Description Text */}
      <Text fontWeight="bold" mb={2}>
        Track your business’s financial health in real-time.
      </Text>
      <Text>
        Monitor key financial metrics like cash flow, expenses, and profits with
        instant and accurate updates. Customize your dashboard to view the KPIs
        most relevant to your business, ensuring you stay on top of your
        financial goals effortlessly.
      </Text>
    </Box>
 
  </Flex>
  <Image
      src={first}
      alt="Description of the image"
      w={"30%"}
    />
</Flex> 

<Flex marginLeft={"auto"} alignItems={"center"} marginRight={"auto"} justifyContent={"space-around"}  flexDirection="row"> 
<Image
      src={second}
      alt="Description of the image"
      w={"30%"}
    />
  <Flex flexDirection="column" alignContent={"center"}>
  <Box
      maxW="lg"
      overflow="hidden"
      p={6}
    >
           <Circle
          size={iconSize}
          bg="teal.400"
          color="white"
          fontWeight="bold"
          mr={3}
        >
          2
        </Circle>
      <Flex alignItems="center" mb={4}>
        {/* Numbered Icon */}
   
        {/* Main Heading */}
        <Heading as="h2" size="lg">
Expense tracking        </Heading>
      </Flex>

      {/* Description Text */}
      <Text fontWeight="bold" mb={2}>
      Get complete control over your company’s spending .     </Text>
      <Text>
     Log and categorize expenses in detail, while visual graphs showcase spending trends over time. Access real-time updates and insights, giving you a clear picture of your current expense status to make informed decisions.
      </Text>
    </Box>
 
  </Flex>

</Flex>









<Flex marginLeft={"auto"} alignItems={"center"} marginRight={"auto"} justifyContent={"space-around"}  flexDirection="row"> 

  <Flex flexDirection="column" alignContent={"center"}>
  <Box
      maxW="lg"
      overflow="hidden"
      p={6}
    >
           <Circle
          size={iconSize}
          bg="teal.400"
          color="white"
          fontWeight="bold"
          mr={3}
        >
          3
        </Circle>
      <Flex alignItems="center" mb={4}>
        {/* Numbered Icon */}
   
        {/* Main Heading */}
        <Heading as="h2" size="lg">
Forecast and recommendations       </Heading>
      </Flex>
      {/* Description Text */}
      <Text fontWeight="bold" mb={2}>
      Generate professional financial reports effortlessly.     </Text>
      <Text>
      Automatically create detailed reports, including income statements, balance sheets, and cash flow reports, in various formats (PDF, Excel, CSV). Customize reports based on your preferred metrics and time periods for precise and personalized financial analysis.      </Text>
    </Box>
  </Flex>
  <Image
      src={third}
      alt="Description of the image"
      w={"30%"}
    />
</Flex>
<Flex marginLeft={"auto"} alignItems={"center"} marginRight={"auto"} justifyContent={"space-around"}  flexDirection="row"> 
<Image
      src={fourth}
      alt="Description of the image"
      w={"30%"}
    />
  <Flex flexDirection="column" alignContent={"center"}>
  <Box
      maxW="lg"
      overflow="hidden"
      p={6}
    >
           <Circle
          size={iconSize}
          bg="teal.400"
          color="white"
          fontWeight="bold"
          mr={3}
        >
          4
        </Circle>
      <Flex alignItems="center" mb={4}>
        {/* Numbered Icon */}
        {/* Main Heading */}
        <Heading as="h2" size="lg">
        Financial  Reporting Feature      </Heading>
      </Flex>
      {/* Description Text */}
      <Text fontWeight="bold" mb={2}>
      Optimize your spending and plan for the future.    </Text>
      <Text>
    Leverage past expense data to gain insights into spending patterns and receive personalized recommendations for budget optimization. Our predictive modeling tool helps you forecast future expenses based on past trends and company goals, ensuring your business remains financially prepared.    </Text>
    </Box>
  </Flex>
</Flex>
<Image
mt={"50px"}
      src={feedbacks}
      alt="Description of the image"
      w={"30%"}
    />
<Box
      maxW="80vw"
      overflowX="auto"
      p={5}
      py={8}
      sx={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        '-ms-overflow-style': 'none',  /* IE and Edge */
        'scrollbar-width': 'none',  /* Firefox */
      }}
      marginLeft={"auto"}
      marginRight={"auto"}
    >
      <Flex gap={4}>
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            minW="300px"
            p={5}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="lg"
            bg="white"
          >
            <Flex align="center" mb={4}>
              <Avatar src={testimonial.image} size="md" mr={3} />
              <VStack align="start" spacing={0}>
                <Text >{testimonial.name}</Text>
                <Text fontSize="sm" color="gray.500">
                  {testimonial.title}
                </Text>
              </VStack>
            </Flex>
            <Text fontSize="lg" color="#313860">
              {testimonial.text}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>





    <Box bgImage={bgImg}  color="#041039" py={10} px={5}>
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

    
    </Box>
    
  );
}

export default Landing;