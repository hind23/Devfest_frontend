// import
import Dashboard from "views/Dashboard/Dashboard";
import Tables from "views/Dashboard/Tables";
import Billing from "views/Dashboard/Billing";
import Landing from "views/Auth/landing";
import Profile from "views/Dashboard/Profile";
import SignIn from "views/Auth/SignIn.js";
import SignUp from "views/Auth/SignUp.js";
import { MdLogout } from 'react-icons/md'; 
import logOut from "./assets/svg/Vector.svg";
import { Image } from "@chakra-ui/react";
import  {ChatBot}  from "views/Dashboard/Chatbot.js";
import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/Admin",
  },
  {
    path: "/chatbot",
    name: "Chat Bot",
    rtlName: "لوحة القيادة",
    icon: <RocketIcon color="inherit" />,
    secondaryNavbar: true,
    component: ChatBot,
    layout: "/Admin",
  },
  {
    path: "/tables",
    name: "Expanses Tracking",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color="inherit" />,
    component: Tables,
    layout: "/Admin",
  },
  {
    path: "/billing",
    name: "Forecasting and Recommendations",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color="inherit" />,
    component: Billing,
    layout: "/Admin",
  },

  {
    path: "/signin",
    name: "Log In",
    rtlName: "لوحة القيادة",
    icon: <DocumentIcon color="inherit" />,
    component: SignIn,
    layout: "/auth",
  },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        rtlName: "لوحة القيادة",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/Admin",
      },
  
    
      {
        path: "/signup",
        name: "Sign Up",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      }, {
        path: "/logout",
        name: "Log Out",
        rtlName: "لوحة القيادة",
        icon: <Image src={logOut} alt="CSV Icon" />,
        secondaryNavbar: true,
        component: SignIn,  // This redirects to SignUp
        layout: "/auth",
      }
,         
      {
        path: "/landing",
        name: "Landing Page",
        rtlName: "لوحة القيادة",
        icon: <Image src={logOut} alt="CSV Icon" width="20px" height="20px" />,
        component: Landing,
        layout: "/auth",
      }, 

  
    
    ],
  },
];

export default dashRoutes;