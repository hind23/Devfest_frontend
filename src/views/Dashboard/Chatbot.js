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
    Heading
  } from "@chakra-ui/react";
  import { ChatBotMini } from "components/ChatBotMini";

  import { FaPaperPlane, FaPaperclip, FaTimesCircle } from "react-icons/fa";
  import { useState, useRef } from "react";
  import ChatBotImg from "../../assets/svg/BBT.svg"; 
  
  export const ChatBot = () => {
    const [selectedFiles, setSelectedFiles] = useState([]); 
    const [messages, setMessages] = useState([]);
    const fileInputRef = useRef(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [visible, setVisible] = useState(true);
  
    const getResponse = (question) => {
      return `Response for "${question}"`;
    };
  
    const handleAskChatBot = () => {
      setVisible(false);
      const inputField = document.getElementById("chat-input");
      const question = inputField.value;
  
      if (question) {
        setMessages((prevMessages) => [...prevMessages, { text: question, sender: "user" }]);
        inputField.value = ""; 
  
        setTimeout(() => {
          const answer = getResponse(question);
          setMessages((prevMessages) => [...prevMessages, { text: answer, sender: "bot" }]);
        }, 800); 
      }
  
      setIsExpanded(true); 
    };
  
    const handleAttachFiles = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };
  
    const handleFileChange = (event) => {
      const files = Array.from(event.target.files);
      setSelectedFiles((prevFiles) => [...prevFiles, ...files]); // Add new files to the current selection
    };
  
    const removeFile = (fileName) => {
      setSelectedFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
    };
  
    return (
      <Container minH={"80vh"} maxW="sm" centerContent>
        <VStack spacing={6} align="center" mt={10}>
          <Image src={ChatBotImg} alt="Chatbot Icon" boxSize="50px" />
          <Text color={"#041039"} fontSize="lg" fontWeight="bold" textAlign="center">
            Empower Your Finances, Secure Your Future.
          </Text>
          <HStack spacing={2}>
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
                display={visible ? "block" : "none"}
                onClick={() => handleAskChatBot("What is our current cash flow?")}
              >
                What is our current cash flow?
              </Button>
            ))}
          </HStack>
  
          <Box
            minH={"fit-content"}
            position={isExpanded ? "absolute" : "relative"}
            bottom={isExpanded ? "10px" : ""}
            w={isExpanded ? "80%" : "100%"}
            transition="all 0.3s ease"
          >
            <HStack spacing={3} mt={4}>
              <Button onClick={handleAttachFiles} variant="ghost" colorScheme="teal" color={"#4FD1C5"} size="lg">
                <FaPaperclip />
              </Button>
              <Input
                mt={"40px"}
                id="chat-input"
                variant="outline"
                placeholder="Type a message..."
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAskChatBot();
                  }
                }}
              />
  
              <Button onClick={handleAskChatBot} backgroundColor={"#4FD1C5"} colorScheme="teal" size="lg">
                <FaPaperPlane />
              </Button>
            </HStack>
          </Box>
  
          <Box w="50vw" mt={4} display="flex" flexDirection="column" alignItems="flex-end">
            {messages.map((message, index) => (
              <Box
                key={index}
                textAlign="right" 
                mb={2}
                p={2}
                borderBottomRightRadius="0" 
                borderRadius="md"
                bg={message.sender === "user" ? "gray.100" : "teal.100"}
                w={"fit-content"}
                display="flex"
                flexDirection="column"
              >
                <Heading mb={"10px"} fontSize={"20px"}>
                  {message.sender === "user" ? "You" : "Chatbot"}
                </Heading>
                <Text>{message.text}</Text>
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
            style={{ display: "none" }}
            multiple
          />
        </VStack>
        <ChatBotMini/>
      </Container>
    );
  };