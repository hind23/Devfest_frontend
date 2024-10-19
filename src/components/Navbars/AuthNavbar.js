import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  CreativeTimLogo,

} from "components/Icons/Icons";
import SidebarResponsive from "components/Sidebar/SidebarResponsive";
import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import routes from "routes.js";

export default function AuthNavbar(props) {
  const [open, setOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  const { logo, logoText, secondary, ...rest } = props;
  const activeRoute = (routeName) => {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  };
  let navbarIcon = useColorModeValue("#313860", "#313860");
  let mainText = useColorModeValue("#313860", "#313860");
  let navbarBg = useColorModeValue(
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );
  let navbarBorder = useColorModeValue(
    "1.5px solid #FFFFFF",
    "1.5px solid rgba(255, 255, 255, 0.31)"
  );
  let navbarShadow = useColorModeValue(
    "0px 7px 23px rgba(0, 0, 0, 0.05)",
    "none"
  );
  let navbarFilter = useColorModeValue(
    "none",
    "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))"
  );
  let navbarBackdrop = "blur(21px)";
  let bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "gray.800"
  );
  let navbarPosition = "fixed";
  let colorButton = "white";
  if (props.secondary === true) {
    navbarIcon = "white";
    navbarBg = "none";
    navbarBorder = "none";
    navbarShadow = "initial";
    navbarFilter = "initial";
    navbarBackdrop = "none";
    bgButton = "white";
    colorButton = "gray.700";
    mainText = "white";
    navbarPosition = "absolute";
  }
  var brand = (
    <Link
      href={`${process.env.PUBLIC_URL}/#/`}
      target="_blank"
      display="flex"
      lineHeight="100%"
      fontWeight="bold"
      justifyContent="center"
      alignItems="center"
      color={mainText}
    >
      <CreativeTimLogo color="#313860" w="32px" h="32px" me="10px" />
      <Text color="#313860" fontSize="sm" mt="3px">
        {logoText}
      </Text>
    </Link>
  );
  var linksAuth = (
    <HStack display={{ sm: "none", lg: "flex" }}>
      <NavLink to="/auth/landing">
        <Button
          fontSize="sm"
          ms="0px"
          me="0px"
          px="0px"
          me={{ sm: "2px", md: "16px" }}
          color={navbarIcon}
          variant="transparent-with-icon"
        >
          <Text color="#313860" fontWeight={500}>Landing</Text>
        </Button>
      </NavLink>
      <NavLink to="/features">
        <Button
          fontSize="sm"
          ms="0px"
          me="0px"
          px="0px"
          me={{ sm: "2px", md: "16px" }}
          color={navbarIcon}
          variant="transparent-with-icon"
        >
          <Text color="#313860" fontWeight={500}>Features</Text>
        </Button>
      </NavLink>
       <NavLink to="/Feedback">
        <Button
          fontSize="sm"
          ms="0px"
          me="0px"
          px="0px"
          me={{ sm: "2px", md: "16px" }}
          color={navbarIcon}
          variant="transparent-with-icon"
        >
          <Text color="#313860" fontWeight={500}>Feedbacks</Text>
        </Button>
      </NavLink>   <NavLink to="/contact">
        <Button
          fontSize="sm"
          ms="0px"
          me="0px"
          px="0px"
          me={{ sm: "2px", md: "16px" }}
          color={navbarIcon}
          variant="transparent-with-icon"
        >
          <Text color="#313860" fontWeight={500}>Contact</Text>
        </Button>
      </NavLink>
    </HStack>
  );
  return (
    <Flex zIndex={99}
      position={navbarPosition}
      top="16px"
      left="50%"
      transform="translate(-50%, 0px)"
      background={navbarBg}
      border={navbarBorder}
      boxShadow={navbarShadow}
      filter={navbarFilter}
      backdropFilter={navbarBackdrop}
      borderRadius="15px"
      px="16px"
      py="22px"
      mx="auto"
      width="1044px"
      maxW="90%"
      alignItems="center"
    >
      <Flex w="100%" justifyContent={{ sm: "start", lg: "space-between" }}>
        {brand}
        <Box
          ms={{ base: "auto", lg: "0px" }}
          display={{ base: "flex", lg: "none" }}
        >
          <SidebarResponsive
            logoText="FIN"
            secondary={props.secondary}
            routes={routes}
            {...rest}
          />
        </Box>
        {linksAuth}
        <Flex>
          <Link >
            <NavLink to="/auth/signin">
              <Button
                fontSize="13px"
                variant="no-hover"
                px="30px"
                display={{
                  sm: "none",
                  lg: "flex",
                }}
              >
Log in</Button>
            </NavLink>
          </Link>
          <Link >
            <NavLink to="/auth/signup">
              <Button
                bg={bgButton}
                color={colorButton}
                fontSize="xs"
                variant="no-hover"
                borderRadius="35px"
                px="30px"
                width="150px"
                display={{
                  sm: "none",
                  lg: "flex",
                }}
              >
                Sign up
              </Button>
            </NavLink>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

AuthNavbar.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  brandText: PropTypes.string,
};