// Chakra imports
import { Flex, Grid, useColorModeValue } from "@chakra-ui/react";
import avatar4 from "assets/img/avatars/avatar4.png";
import ProfileBgImage from "assets/img/ProfileBackground.png";
import { ChatBotMini } from "components/ChatBotMini";

import {
  Box,

  Button,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Switch,
  Text,
} from "@chakra-ui/react";

function Profile() {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );

  return (
    <Flex direction="column" align="center" justify="center" p={8} >
      <Box
        w="full"
        maxW="700px"
        p={8}
        bg="white"
        borderRadius="lg"
        boxShadow="md"
      >
        {/* Profile Header */}
        <Heading mb={3} color={"#2D3748"} as="h2" size="lg" >
          BENDAHMANE Nesrine
        </Heading>
        <Text fontSize={"18px"} mb={3} fontWeight={"bold"} >Company name</Text>
        <Text fontSize={"14px"} color={"#142E15"} mb={6}>Email@gmail.com</Text>
        <Divider orientation="horizontal" />

        {/* Privacy Settings */}
        <Heading as="h3" size="md" mt={6} mb={4}>
          Privacy Settings
        </Heading>
        <Stack spacing={4} mb={6}>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="two-factor" mb="0">
              Two-Factor Authentication
            </FormLabel>
            <Switch id="two-factor" display={"block"} marginLeft={"auto"} />
          </FormControl>

          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="email-notifications" mb="0">
              Email Notifications
            </FormLabel>
            <Switch display={"block"} marginLeft={"auto"} id="email-notifications" defaultChecked />
          </FormControl>

          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="transaction-alerts" mb="0">
              Transaction Alerts
            </FormLabel>
            <Switch display={"block"} marginLeft={"auto"} id="transaction-alerts" defaultChecked />
          </FormControl>
        </Stack>

        <Divider mb={6} />

        {/* Personal Information */}
        <Heading as="h3" size="md" mb={4}>
          Personal Information
        </Heading>

        {/* Change Password Form */}
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Old Password</FormLabel>
            <Input w={"50%"} type="password" placeholder="your password" />
          </FormControl>

          <FormControl>
            <FormLabel>New Password</FormLabel>
            <Input py={4} w={"50%"} type="password" placeholder="your new password" />
          </FormControl>
<Flex w={"100%"}>
<FormControl >
            <FormLabel>Confirm Password</FormLabel>
            <Input w={"50%"} type="password" placeholder="confirm password" />
          </FormControl>
          <Button
          mt={6}
          colorScheme="teal"
          size="lg"
          w="50%"
          bg="gray.500"
          _hover={{ bg: "gray.600" }}
        >
          Save
        </Button>
  </Flex>

        </Stack>

        {/* Save Button */}
      
      </Box>
      <ChatBotMini/>
    </Flex>
  );
}

export default Profile;
