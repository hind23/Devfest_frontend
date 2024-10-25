// Chakra imports
import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import SalesOverview from "../Dashboard/components/SalesOverview";
import { Box ,Spacer,Text} from "@chakra-ui/react";
import LineChart from "components/Charts/LineChart";
import { Button } from "@chakra-ui/react";
function Tables() {
  return (
    <Flex direction='column'  pt={{ base: "120px", md: "75px" }}>
     <Flex flexDirection={"row"} >
         <Flex p={"5px"} justifyContent={"center"}  flexDirection={"column"} bgColor={"white"} w={"40%"}>
         <Heading color={"#2D3748"} textAlign={"center"}>
            Category Summary         </Heading>
        </Flex>
        <Spacer/>
        <SalesOverview w={"55%"}
          title={"Profits overview"}
          percentage={5}
          chart={<LineChart />}
        />
      </Flex>
      <Box w={"100%"} marginTop={"50px"} py={"8px"} bgColor={"white"}>
  <Flex p={"10px"} rounded={"lg"}  flexDirection={"row"} alignItems={"center"} w={"100%"} justifyContent={"space-between"}>
    <Heading>
      Expense type
    </Heading>
    
    <Flex flexDirection={"row"} flex={1} justifyContent={"flex-end"}>
      <Button fontSize={"13px"} color={"white"} rounded={"full"} w={"150px"} bgColor={"#4FD1C5"} marginRight={"10px"}>
        Filter
      </Button>
      <Button fontSize={"13px"} color={"white"} rounded={"full"} w={"150px"} bgColor={"#4FD1C5"}>
        Add
      </Button>
    </Flex>
    <Flex>
    {/* A0AEC0 */}

    </Flex>

  </Flex>
  <Text color="#A0AEC0">
  <Flex  fontWeight={"bold"} w={"80%"} justifyContent={"space-between"}>
<Text w={"50%"}>
Title
 </Text> <Text >
Amount
 </Text> <Text >
Category
 </Text> <Text >
Date
 </Text> 
</Flex>


</Text>

<Text color="#041039">
  <Flex  fontWeight={"bold"} w={"80%"} justifyContent={"space-between"}>
<Text w={"50%"}>
Title
 </Text> <Text >
Amount
 </Text> <Text >
Category
 </Text> <Text >
Date
 </Text> 
</Flex>


</Text>



<Text color="#041039">
  <Flex  fontWeight={"bold"} w={"80%"} justifyContent={"space-between"}>
<Text w={"50%"}>
Title
 </Text> <Text >
Amount
 </Text> <Text >
Category
 </Text> <Text >
Date
 </Text> 
</Flex>


</Text><Text color="#041039">
  <Flex  fontWeight={"bold"} w={"80%"} justifyContent={"space-between"}>
<Text w={"50%"}>
Title
 </Text> <Text >
Amount
 </Text> <Text >
Category
 </Text> <Text >
Date
 </Text> 
</Flex>


</Text>
<Text color="#041039">
  <Flex  fontWeight={"bold"} w={"80%"} justifyContent={"space-between"}>
<Text w={"50%"}>
Title
 </Text> <Text >
Amount
 </Text> <Text >
Category
 </Text> <Text >
Date
 </Text> 
</Flex>


</Text>
<Text color="#041039">
  <Flex  fontWeight={"bold"} w={"80%"} justifyContent={"space-between"}>
<Text w={"50%"}>
Title
 </Text> <Text >
Amount
 </Text> <Text >
Category
 </Text> <Text >
Date
 </Text> 
</Flex>
</Text>
<Text color="#041039">
  <Flex  fontWeight={"bold"} w={"80%"} justifyContent={"space-between"}>
<Text w={"50%"}>
Title
 </Text> <Text >
Amount
 </Text> <Text >
Category
 </Text> <Text >
Date
 </Text> 
</Flex>
</Text>
<Text color="#041039">
  <Flex  fontWeight={"bold"} w={"80%"} justifyContent={"space-between"}>
<Text w={"50%"}>
Title
 </Text> <Text >
Amount
 </Text> <Text >
Category
 </Text> <Text >
Date
 </Text> 
</Flex>
</Text>
<Text color="#041039">
  <Flex  fontWeight={"bold"} w={"80%"} justifyContent={"space-between"}>
<Text w={"50%"}>
Title
 </Text> <Text >
Amount
 </Text> <Text >
Category
 </Text> <Text >
Date
 </Text> 
</Flex>
</Text><Text color="#041039">
  <Flex  fontWeight={"bold"} w={"80%"} justifyContent={"space-between"}>
<Text w={"50%"}>
Title
 </Text> <Text >
Amount
 </Text> <Text >
Category
 </Text> <Text >
Date
 </Text> 
</Flex>
</Text><Text color="#041039">
  <Flex  fontWeight={"bold"} w={"80%"} justifyContent={"space-between"}>
<Text w={"50%"}>
Title
 </Text> <Text >
Amount
 </Text> <Text >
Category
 </Text> <Text >
Date
 </Text> 
</Flex>
</Text><Text color="#041039">
  <Flex  fontWeight={"bold"} w={"80%"} justifyContent={"space-between"}>
<Text w={"50%"}>
Title
 </Text> <Text >
Amount
 </Text> <Text >
Category
 </Text> <Text >
Date
 </Text> 
</Flex>
</Text><Text color="#041039">
  <Flex  fontWeight={"bold"} w={"80%"} justifyContent={"space-between"}>
<Text w={"50%"}>
Title
 </Text> <Text >
Amount
 </Text> <Text >
Category
 </Text> <Text >
Date
 </Text> 
</Flex>
</Text><Text color="#041039">
  <Flex  fontWeight={"bold"} w={"80%"} justifyContent={"space-between"}>
<Text w={"50%"}>
Title
 </Text> <Text >
Amount
 </Text> <Text >
Category
 </Text> <Text >
Date
 </Text> 
</Flex>
</Text><Text color="#041039">
  <Flex  fontWeight={"bold"} w={"80%"} justifyContent={"space-between"}>
<Text w={"50%"}>
Title
 </Text> <Text >
Amount
 </Text> <Text >
Category
 </Text> <Text >
Date
 </Text> 
</Flex>
</Text><Text color="#041039">
  <Flex  fontWeight={"bold"} w={"80%"} justifyContent={"space-between"}>
<Text w={"50%"}>
Title
 </Text> <Text >
Amount
 </Text> <Text >
Category
 </Text> <Text >
Date
 </Text> 
</Flex>
</Text><Text color="#041039">
  <Flex  fontWeight={"bold"} w={"80%"} justifyContent={"space-between"}>
<Text w={"50%"}>
Title
 </Text> <Text >
Amount
 </Text> <Text >
Category
 </Text> <Text >
Date
 </Text> 
</Flex>
</Text>
</Box>
    </Flex>
  );
}
export default Tables;