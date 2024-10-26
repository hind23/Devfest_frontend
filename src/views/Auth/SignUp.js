import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
  useColorModeValue,
  Select,
} from "@chakra-ui/react";
import ok from "../../assets/svg/ok.svg";
import { NavLink } from "react-router-dom";
import BgSignUp from "assets/img/BgSignUp.png";
import AuthNavbar from "components/Navbars/AuthNavbar";
function SignUp() {
  const [step, setStep] = useState(1); // Track which step is currently active
  const [colors, setColors] = useState({
    col1: "teal.400",
    col2: "gray.200",
  });
  const [formValues, setFormValues] = useState({
    companyName: "",
    industry: "",
    region: "",
    address: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isCompanyInfoValid, setIsCompanyInfoValid] = useState(false); // New state for validation

  const handleSwitchColors = () => {
    setColors((prevColors) => ({
      col1: prevColors.col1 === "teal.400" ? "gray.200" : "teal.400",
      col2: prevColors.col2 === "gray.200" ? "teal.400" : "gray.200",
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const nextStep = () => {
    const companyFieldsValid = Object.values(formValues)
      .slice(0, 4)
      .every((value) => value !== ""); // Check if all company fields are filled

    if (companyFieldsValid) {
      setStep(2);
      setColors({
        col1: "gray.200",
        col2: "teal.400",
      });
    } else {
      alert("Please fill in all the company information fields.");
    }
  };

  const previousStep = () => {
    setStep(1);
    setColors({
      col1: "teal.400",
      col2: "gray.200",
    });
  };

  const allFieldsFilled =
    step === 1
      ? Object.values(formValues)
          .slice(0, 4) // Check if the first four fields are filled for step 1
          .every((value) => value !== "")
      : Object.values(formValues)
          .slice(4) // Check if the personal information fields are filled for step 2
          .every((value) => value !== "");

  // Add useEffect to track changes and validate company info
  useEffect(() => {
    const companyFieldsValid = Object.values(formValues)
      .slice(0, 4)
      .every((value) => value !== ""); // Check if all company fields are filled
    setIsCompanyInfoValid(companyFieldsValid);
  }, [formValues]);

  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");

  return (
    <Flex direction="column" alignSelf="center" justifySelf="center" overflow="hidden">
      <AuthNavbar/>
      <Box
        position="absolute"
        minH={{ base: "70vh", md: "50vh" }}
        w={{ md: "calc(100vw - 50px)" }}
        borderRadius={{ md: "15px" }}
        left="0"
        right="0"
        bgRepeat="no-repeat"
        overflow="hidden"
        zIndex="-1"
        top="0"
        bgImage={BgSignUp}
        bgSize="cover"
        mx={{ md: "auto" }}
        mt={{ md: "14px" }}
      ></Box>
      <Flex direction="column" textAlign="center" justifyContent="center" align="center" mt="6.5rem" mb="30px">
        <Text color="#313860" fontSize="4xl" fontWeight="bold">
          Welcome!
        </Text>
        <Text
          fontSize="md"
          color="#313860"
          fontWeight="normal"
          mt="10px"
          mb="26px"
          w={{ base: "90%", sm: "60%", lg: "40%", xl: "30%" }}
        >
          Utilize these fantastic forms to create a new account for your company team and manage your finances efficiently.
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="center" mb="60px" mt="20px">
        <Flex
          direction="column"
          w="500px"
          background="transparent"
          borderRadius="15px"
          p="40px"
          mx={{ base: "100px" }}
          bg={bgColor}
          boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
        >
          <Flex mb="50px" justifyContent="space-between">
            <Text cursor="pointer" align={"center"} display={"flex"} fontSize="14px" onClick={previousStep}>
              <Box
                as="span"
                display="inline-block"
                bg={isCompanyInfoValid ? "teal.400" : colors.col1} // Change to green if valid
                color="white"
                borderRadius="50%"
                width="24px"
                height="24px"
                textAlign="center"
                lineHeight="24px"
                mr="8px"
              >
                {isCompanyInfoValid ? <img src={ok} alt="ok" /> : 1}
              </Box>
              company information
            </Text>

            <Text cursor="pointer" fontSize="14px" onClick={nextStep}>
              <Box
                as="span"
                display="inline-block"
                bg={colors.col2}
                color="black"
                borderRadius="50%"
                width="24px"
                height="24px"
                textAlign="center"
                lineHeight="24px"
                mr="8px"
              >
                2
              </Box>
              personal information
            </Text>
          </Flex>

          {step === 1 ? (
            // Step 1: Company Information Form
            <FormControl>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Company Name
              </FormLabel>
              <Input
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="text"
                placeholder="Your Company Name"
                mb="24px"
                size="lg"
                name="companyName"
                value={formValues.companyName}
                onChange={handleInputChange}
              />
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Industry
              </FormLabel>
              <Select
                fontSize="sm"
                ms="4px"
                mb="24px"
                size="lg"
                borderRadius="15px"
                color="black"
                name="industry"
                value={formValues.industry}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  See options
                </option>
                <option value="Technology/Software">Technology/Software</option>
                <option value="HealthCare">Health Care</option>
                <option value="Finance/Banking">Finance/Banking</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Education">Education</option>
                <option value="Hospitality/Travel">Hospitality/Travel</option>
                <option value="Others...">Others...</option>
              </Select>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Region
              </FormLabel>
              <Input
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="text"
                placeholder="Enter the company region"
                mb="24px"
                size="lg"
                name="region"
                value={formValues.region}
                onChange={handleInputChange}
              />
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Company address
              </FormLabel>
              <Input
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="text"
                placeholder="Enter the company address (optional)"
                mb="24px"
                size="lg"
                name="address"
                value={formValues.address}
                onChange={handleInputChange}
              />

              <Button
                onClick={nextStep}
                bg="teal.300"
                fontSize="13px"
                color="white"
                fontWeight="bold"
                w="100%"
                h="45"
                mb="24px"
                opacity={allFieldsFilled ? 1 : 0.5}
                _hover={{
                  bg: "teal.200",
                }}
                _active={{
                  bg: "teal.400",
                }}
                disabled={!allFieldsFilled}
              >
                Next
              </Button>
            </FormControl>
          ) : (
            // Step 2: Personal Information Form
            <FormControl>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Full Name
              </FormLabel>
              <Input
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="text"
                placeholder="Your full name"
                mb="24px"
                size="lg"
                name="fullName"
                value={formValues.fullName}
                onChange={handleInputChange}
              />
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Email
              </FormLabel>
              <Input
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="email"
                placeholder="Your email address"
                mb="24px"
                size="lg"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
              />
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Password
              </FormLabel>
              <Input
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="password"
                placeholder="Your password"
                mb="24px"
                size="lg"
                name="password"
                value={formValues.password}
                onChange={handleInputChange}
              />
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Confirm Password
              </FormLabel>
              <Input
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="password"
                placeholder="Confirm your password"
                mb="24px"
                size="lg"
                name="confirmPassword"
                value={formValues.confirmPassword}
                onChange={handleInputChange}
              />
              <NavLink to="/Admin/dashboard">
              <Button
                onClick={previousStep}
                bg="teal.300"
                fontSize="13px"
                color="white"
                fontWeight="bold"
                w="100%"
                h="45"
                mb="24px"
                opacity={allFieldsFilled ? 1 : 0.5}
                _hover={{
                  bg: "teal.200",
                }}
                _active={{
                  bg: "teal.400",
                }}
                disabled={!allFieldsFilled}
              >
                Sign up
              </Button>
              </NavLink>
            </FormControl>
          )}
                    <Text textAlign={"center"} color={"#A0AEC0"} fontWeight='500'>
                Already have an account ?  
                <NavLink   color="black" as='span' ms='5px' fontWeight='500'  to="/auth/signin">
                <Text marginLeft={"2px"} display={"inline"} color="teal.400">
Log In
                </Text>
                 
                </NavLink>
    
              </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignUp;


