// Chakra imports
import {
  Flex,
  Grid,
  Image,
  Box,Text,Select,
  SimpleGrid,Divider ,Icon,
  useColorModeValue
} from "@chakra-ui/react";
import Card from "components/Card/Card.js";

import { ChatBotMini } from "components/ChatBotMini";
import LineChart from "components/Charts/LineChart";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import BarChart from "components/Charts/BarChart";
import cashFlow from "assets/svg/CashFlow.svg"
import cashFlow2 from "assets/svg/Graph1.svg"
import expenses from "assets/svg/expanses.svg"
import revenue from "assets/svg/revenue.svg"
import profits from "assets/svg/profits.svg"
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import React from "react";
import ActiveUsers from "./components/ActiveUsers";
import MiniStatistics from "./components/MiniStatistics";
import SalesOverview from "./components/SalesOverview";
import GraphOfTrends from "../../../assets/svg/GraphOfTrends.svg";
const TransactionItem = ({ title, date, amount, color, icon }) => (
 
  <Flex justifyContent="space-between" alignItems="center" mb={3}>
    <Flex alignItems="center">
      <Icon as={icon} color={color} boxSize={4} mr={2} />
      <Box>
        <Text fontWeight={"semibold"}>{title}</Text>
        <Text fontSize="xs" color="#A0AEC0">{date}</Text>
      </Box>
    </Flex>
    <Text fontWeight={"semibold"} color={color}>{amount}$</Text>
  </Flex>
);
export default function Dashboard() {
  const handleSelectChange = (event) => {
    console.log("Selected value:", event.target.value);
  };
  const getProfits=()=>
    {
      return 2400 ;
    } 
  const getExpenses=()=>
      {
        return 2400 ;
      }
      const getRevenue=()=>
        {
          return 2400 ;
        }  
      const getCashFlow=()=>
          {
            return 2400 ;
          }

  const iconBoxInside = useColorModeValue("white", "white");

  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid marginBottom={"16px"} columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'>
        <MiniStatistics
          title={"Today's Moneys"}
          amount={"$53,000"}
          percentage={55}
          icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Today's transactions"}
          amount={"2,300"}
          percentage={5}
          icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"expanses"}
          amount={"+3,020"}
          percentage={-14}
          icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Today's earnings "}
          amount={"$173,000"}
          percentage={8}
          icon={<CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
      </SimpleGrid>
    
      <Grid
        templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
        templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
        gap='24px'
        mb={{ lg: "26px" }}>
        <Card p='16px'>
        <Flex justifyContent={"space-between"}>
        <Select
          fontSize="sm"
          ms="4px"
          mb="24px"
          size="lg"
          w={"250px"}
          borderRadius="5px"
          color="black"
          name="cashFlow"
          fontWeight={"bold"}
          defaultValue={""}
          onChange={handleSelectChange} // Updated to use a handler
        >
          <option value="" disabled>
            Cash flow (revenue)
          </option>
          <option value="Technology/Software">Cash flow (expense)</option>
        </Select>
        <Select
          fontSize="sm"
          ms="4px"
          mb="24px"
          size="lg"
          borderRadius="5px"
          color="black"
          name="timePeriod"
          w={"150px"}
          defaultValue={""}
          onChange={handleSelectChange} // Updated to use a handler
        >
          <option value="" disabled>
            Time periods
          </option>
          <option value="Daily">Daily</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </Select>
      </Flex>
      <Image  src={cashFlow2} alt="Cash Flow" mr="8px" />

</Card>
        <SalesOverview
          title={"Profits Overview"}
          percentage={5}
          chart={<LineChart />}
        />
      </Grid>
  
    
      <Grid
        templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
        templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
        gap='24px'
        mb={{ lg: "26px" }}>
        <Grid>
        <Flex
        backgroundColor={'white'}
      h="100px"
      justifyContent="space-between"
      alignItems="center"
      p="15px"
      rounded="lg"
      shadow="md"
    >
      {/* Cash Flow Card */}
      <Box
        textAlign="center"
      >
        <Flex alignItems="center" justifyContent="space-between" mb="10px">
          <Image  src={cashFlow} alt="Cash Flow" mr="8px" />
          <Text fontSize="sm" fontWeight="bold" color="#A0AEC0">
            Cash Flow
          </Text>
        </Flex>
        <Text fontSize="lg" fontWeight="bold" mb="5px">
        {getCashFlow()}$
        </Text>
        {/* #4FD1C5 */}
      </Box>

      {/* Profits Card */}
      <Box
        
        textAlign="center"
      >
        <Flex alignItems="center" justifyContent="center" mb="10px">
          <Image src={profits} alt="Profits" mr="8px" />
          <Text fontSize="sm" fontWeight="bold" color="#A0AEC0">
            Profits
          </Text>
        </Flex>
        <Text fontSize="lg" fontWeight="bold" mb="5px">
          2,400$
        </Text>
        

      </Box>

      {/* Expenses Card */}
      <Box

        textAlign="center"
      >
        <Flex alignItems="center" justifyContent="center" mb="10px">
          <Image  src={expenses} alt="Expenses" mr="8px" />
          <Text fontSize="sm" fontWeight="bold" color="#A0AEC0">
            Expenses
          </Text>
        </Flex>
        <Text fontSize="lg" fontWeight="bold" mb="5px">
          2,400$
        </Text>
       
      </Box>

      {/* Revenue Card */}
      <Box
        textAlign="center"
      >
        <Flex alignItems="center" justifyContent="center" mb="10px">
          <Image  src={revenue} alt="Revenue" mr="8px" />
          <Text fontSize="sm" fontWeight="bold" color="#A0AEC0">
            Revenue
          </Text>
        </Flex>
        <Text fontSize="lg" fontWeight="bold" mb="5px">
          2,400$
        </Text>
      
      </Box>

    </Flex>

       <Box id="remaining" h={"300px"} 
         p="15px"
      rounded="lg"
      shadow="md"
      mb={"auto"}
       backgroundColor={"white"} boxShadow={"md"}>
<Image  src={GraphOfTrends} />
        </Box> 

        </Grid>
        <Box rounded={"md"} backgroundColor={"white"} p={5}>
      {/* Transactions Header */}
      <Flex justifyContent="space-between" alignItems="center" mb={5}>
        <Text fontSize="lg" fontWeight="bold">Transactions</Text>
        <Text color="gray.500" fontSize="sm">23 - 30 March 2020</Text>
      </Flex>

      {/* Newest Label */}
      <Text fontSize="xs" fontWeight="bold" color="#A0AEC0" mb={3}>NEWEST</Text>

      {/* Transaction Items */}
      <TransactionItem
        title="Budget Allocation"
        date="27 March 2020, at 12:30 PM"
        amount="-2500"
        color="red.500"
        icon={FaArrowDown}
      />
      <TransactionItem
        title="Financial Report"
        date="27 March 2020, at 12:30 PM"
        amount="+2500"
        color="green.500"
        icon={FaArrowUp}
      />

      <Divider my={4} />

      {/* Yesterday Label */}
      <Text fontSize="xs" fontWeight="bold" color="#A0AEC0" mb={3}>YESTERDAY</Text>

      <TransactionItem
        title="Banking"
        date="26 March 2020, at 13:45 PM"
        amount="+800"
        color="green.500"
        icon={FaArrowUp}
      />
      <TransactionItem
        title="Financial Services"
        date="26 March 2020, at 12:30 PM"
        amount="+1700"
        color="green.500"
        icon={FaArrowUp}
      />
      <TransactionItem
        title="Finance"
        date="25 March 2020, at 16:30 PM"
        amount="-987"
        color="red.500"
        icon={FaArrowDown}
      />
    </Box>
      </Grid>
<ChatBotMini/>
    </Flex>
  );
}
