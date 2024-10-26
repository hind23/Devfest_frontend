// Chakra imports
import { Flex, Heading,Image } from "@chakra-ui/react";
import React from "react";
import SalesOverview from "../Dashboard/components/SalesOverview";
import { Box ,Spacer,Text} from "@chakra-ui/react";
import LineChart from "components/Charts/LineChart";
import { Button } from "@chakra-ui/react";
import pieChart from "assets/svg/pieChart.svg";
import { ChatBotMini } from "components/ChatBotMini";

function Tables() {
  const expenses = [
    { title: "Office Rent", amount: "340,000 DZD", category: "Operational Expense", date: "2024-09-01" },{ title: "Office Rent", amount: "340,000 DZD", category: "Operational Expense", date: "2024-09-01" },{ title: "Office Rent", amount: "340,000 DZD", category: "Operational Expense", date: "2024-09-01" },{ title: "Office Rent", amount: "340,000 DZD", category: "Operational Expense", date: "2024-09-01" },{ title: "Office Rent", amount: "340,000 DZD", category: "Operational Expense", date: "2024-09-01" },{ title: "Office Rent", amount: "340,000 DZD", category: "Operational Expense", date: "2024-09-01" },{ title: "Office Rent", amount: "340,000 DZD", category: "Operational Expense", date: "2024-09-01" },{ title: "Office Rent", amount: "340,000 DZD", category: "Operational Expense", date: "2024-09-01" },{ title: "Office Rent", amount: "340,000 DZD", category: "Operational Expense", date: "2024-09-01" },{ title: "Office Rent", amount: "340,000 DZD", category: "Operational Expense", date: "2024-09-01" },{ title: "Office Rent", amount: "340,000 DZD", category: "Operational Expense", date: "2024-09-01" },
  ];
  return (
    <Flex direction='column'  pt={{ base: "120px", md: "75px" }}>
     <Flex flexDirection={"row"} >
         <Flex p={"5px"} justifyContent={"center"}  flexDirection={"column"} bgColor={"white"} w={"40%"}>
         <Heading color={"#2D3748"} textAlign={"center"}>
            Category Summary         </Heading>
            <Image src={pieChart} alt={"pieChart"} />
            </Flex>
        <Spacer/>
        <SalesOverview w={"55%"}
          title={"Profits overview"}
          percentage={5}
          chart={<LineChart />}
        />
      </Flex>
      <Box w="100%" mt="50px" py="8px" bg="white">
      {/* Header Section */}
      <Flex p="10px" rounded="lg" flexDirection="row" alignItems="center" w="100%" justifyContent="space-between">
        <Heading size="md" color="#041039">Expense Type</Heading>
        <Flex flexDirection="row" justifyContent="flex-end" gap="10px">
          <Button fontSize="13px" color="white" rounded="full" w="150px" bgColor="#4FD1C5">Filter</Button>
          <Button fontSize="13px" color="white" rounded="full" w="150px" bgColor="#4FD1C5">Add</Button>
        </Flex>
      </Flex>

      {/* Table Headers */}
      <Flex fontWeight="bold" color="#A0AEC0" py="4" px="10" borderBottom="1px solid #E2E8F0" alignItems="center" justifyContent="space-between">
        <Text w="30%">Title</Text>
        <Text w="20%">Amount</Text>
        <Text w="30%">Category</Text>
        <Text w="20%">Date</Text>
      </Flex>

      {/* Table Rows */}
      {expenses.map((expense, index) => (
        <Flex key={index} color="#041039" py="4" px="10" borderBottom="1px solid #E2E8F0" alignItems="center" justifyContent="space-between">
          <Text w="30%">{expense.title}</Text>
          <Text w="20%">{expense.amount}</Text>
          <Text w="30%">{expense.category}</Text>
          <Text w="20%">{expense.date}</Text>
        </Flex>
      ))}
    </Box>
    <ChatBotMini/>
    </Flex>
  );
}
export default Tables;