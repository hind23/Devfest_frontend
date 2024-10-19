// Chakra imports
import { Flex, FormLabel,Select, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
// Custom icons
import {
  CartIcon,
  RocketIcon,
  StatsIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import React from "react";
import ChartStatistics from "./ChartStatistics";

const ActiveUsers = ({ title, percentage, chart }) => {
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card p='16px' >
      <Flex justifyContent={"space-between"}>
      <Select
                fontSize="sm"
                ms="4px"
                mb="24px"
                size="lg"
                w={"250px"}
                borderRadius="5px"
                color="black"
                name="industry"
                fontWeight={"bold"}
                value={""}
                onChange={""}
              >
                <option value="" disabled>
Cash flow (revenue)                </option>
                <option value="Technology/Software">Cash flow (exspanse) </option>
              </Select><Select
                fontSize="sm"
                ms="4px"
                mb="24px"
                size="lg"
                borderRadius="5px"
                color="black"
                name="industry"
                w={"150px"}
                value={""}
                onChange={""}
              >
                <option value="" disabled>
Time periods               </option>
                <option value="Daily">Daily</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly"> Yearly </option>
                
              </Select>
      </Flex>
      <Text color={"#A0AEC0"}>
      <Text fontWeight={"bold"} color={"#48BB78"} display={"inline"}  > (+23) </Text>  than last week     
      </Text>
      <CardBody>
        <Flex marginTop={"10%"} justifyContent={"center"} justifyItems={"center"} direction='column' w='100%'>
          {chart}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ActiveUsers;
