// Chakra imports
import { Box,Image, Flex, Text, VStack, HStack, Button } from "@chakra-ui/react";

import { ChatBotMini } from "components/ChatBotMini";
import forcasting from "../../../assets/svg/forecasting.svg"
import GraphOfTrends1 from "../../../assets/svg/GraphOfTrends1.svg"

function Billing() {
  return (
    <VStack spacing={6} p={10}>
      {/* Top Row with Graphs */}
      <HStack spacing={6} w="full">
        <Box 
          w="50%"
          bg="white"
          boxShadow="md"
          borderRadius="lg"
          p={6}
        >

          <Text fontSize="lg" fontWeight="bold" mb={4}>
            Graph Of Trends
          </Text>
          <Image src={GraphOfTrends1} alt="Graph of Trends" />

        </Box>

        {/* Forecasting Card */}
        <Box
          w="50%"
          bg="white"
          boxShadow="md"
          borderRadius="lg"
          mt={"40px"}
          p={6}
        >
          <Flex justifyContent="space-between" alignItems="center" mb={4}>
            <Text fontSize="lg" fontWeight="bold">
              Forecasting
            </Text>
          </Flex>
          <Text color="teal.500" mb={2}>Predictive values</Text>
          <Image src={forcasting} alt="Forecasting" />
        </Box>
      </HStack>

      {/* Recommendations Section */}
      <Box w="full" bg="teal.400" borderRadius="lg" p={6} fontWeight={"semiBold"} color="#041039" mt={4}>
        <Text fontSize="lg" fontWeight="bold" mb={4}>
          Recommendations
        </Text>
        <Box bg="white" p={4} borderRadius="lg" >
          <Text color="#041039" fontWeight={"semiBold"}>
            The analysis shows a 20% increase in marketing and travel expenses over the past year. To optimize costs,
            the company should consolidate software subscriptions to reduce IT expenses, shift marketing strategies to
            digital channels for efficiency, and implement a strict travel approval policy. Predictive models indicate
            a potential rise in marketing costs due to product launches, so reallocating resources to the most effective
            channels is advised.
          </Text>
        </Box>
      </Box>
      <ChatBotMini/>
    </VStack>
  );
}

export default Billing;
