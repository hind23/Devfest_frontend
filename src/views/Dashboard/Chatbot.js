import {
    Box,
    Button,
    Container,
    HStack,
    Input,
    VStack,
    Text,
    Image,
    List,
    ListItem,
    IconButton,
  } from "@chakra-ui/react";
  import { FaPaperPlane, FaPaperclip, FaTimesCircle } from "react-icons/fa";
  import { useState, useRef } from "react";
  import ChatBotImg from "../../assets/svg/chatBot.svg"; // Ensure this path is correct
  
  export const ChatBot = () => {
    const [selectedFiles, setSelectedFiles] = useState([]); // State to store selected files
    const [messages, setMessages] = useState([]); // State to store chat messages
    const fileInputRef = useRef(null);
    const [position, setPosition] = useState("block");
    const [isExpanded, setIsExpanded] = useState(false); // Track if the input area is expanded
  
    const handleAskChatBot = () => {
      const inputField = document.getElementById("chat-input"); // Get the input field by ID
      const message = inputField.value.trim(); // Get the trimmed message from the input field
  
      if (message) {
        setMessages((prevMessages) => [...prevMessages, message]); // Add new message to messages array
        inputField.value = ""; // Clear the input field
      }
  
      setPosition("absolute");
      setIsExpanded(true); // Set expanded state to true
    };
  
    const handleAttachFiles = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };
  
    const handleFileChange = (event) => {
      const files = Array.from(event.target.files);
      console.log(files);
      setSelectedFiles((prevFiles) => [...prevFiles, ...files]); // Add new files to the current selection
    };
  
    const removeFile = (fileName) => {
      setSelectedFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
    };
  
    return (
      <Container maxW="sm" centerContent>
        <VStack  spacing={6} align="center" mt={10}>
          <Image src={ChatBotImg} alt="Chatbot Icon" boxSize="50px" />
          <Text color={"#041039"} fontSize="lg" fontWeight="bold" textAlign="center">
            Empower Your Finances, Secure Your Future.
          </Text>
          <HStack spacing={2}>
            {/* Repeatable buttons for demonstration */}
            {[...Array(3)].map((_, index) => (
              <Button
                key={index}
                h={"100px"}
                w="full"
                bg="white"
                border="sm"
                borderColor="teal"
                color={"#041039"}
                variant="outline"
                px={4}
                py={4}
              >
                What is our current cash flow?
              </Button>
            ))}
          </HStack>
  
          <Box
            position={isExpanded ? "absolute" : "relative"} // Use position based on expanded state
            bottom={isExpanded ? "20px" : "0"}
            w={isExpanded ? "80%" : "100%"}
            transition="all 0.3s ease" // Add smooth transition
          >
            <HStack spacing={3} mt={4}>
              <Button onClick={handleAttachFiles} variant="ghost" colorScheme="teal" color={"#4FD1C5"} size="lg">
                <FaPaperclip />
              </Button>
              <Input id="chat-input" variant="outline" placeholder="Type a message..." size="lg" />
              <Button onClick={handleAskChatBot} backgroundColor={"#4FD1C5"} colorScheme="teal" size="lg">
                <FaPaperPlane />
              </Button>
            </HStack>
          </Box>
  
          {/* Messages display area */}
          <Box w="full" mt={4} overflowY="auto" maxH="300px">
  {messages.map((message, index) => (
    <Box
      key={index}
      textAlign="left"
      mb={2}
      p={2}
      borderBottomRightRadius="0px"
      borderRadius="md"
      bg="white"
      maxW="70%" // Set maximum width for the message
      alignSelf="flex-start" // Align message to the left
    >
      <Text w={"40vw"}>{message}</Text>
    </Box>
  ))}
</Box>

  
          {selectedFiles.length > 0 && (
            <Box mt={4} w="full">
              <Text fontSize="md" fontWeight="bold" mb={2}>
                Uploaded Files:
              </Text>
              <List spacing={2}>
                {selectedFiles.map((file, index) => (
                  <ListItem key={index} display="flex" alignItems="center" justifyContent="space-between">
                    <Text>{file.name}</Text>
                    <IconButton
                      icon={<FaTimesCircle />}
                      colorScheme="red"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(file.name)}
                      aria-label="Remove file"
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          )}
  
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }} // Hide the file input
            multiple // Allow selecting multiple files
          />
        </VStack>
      </Container>
    );
  };
  