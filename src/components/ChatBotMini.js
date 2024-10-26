import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Input,
  VStack,
  Text,
  HStack,
  Collapse,
  Image,
} from '@chakra-ui/react';
import MiniBot from '../assets/svg/MiniBot.svg'; // Update this path
import Close from '../assets/svg/Close.svg'; // Update this path

export const ChatBotMini = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [welcomeMessageSent, setWelcomeMessageSent] = useState(false); // New state to track welcome message

  const toggleChatbot = () => {
    setIsOpen((prev) => !prev);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setMessages((prev) => [...prev, { text: inputValue, isUser: true }]);
      setInputValue('');

      // Simulate a bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: 'This is a bot response.', isUser: false },
        ]);
      }, 1000);
    }
  };

  // Effect to add a welcome message when the chatbot opens
  useEffect(() => {
    if (isOpen && !welcomeMessageSent) {
      setMessages((prev) => [
        ...prev,
        { text: 'Welcome to our chat support! How can I assist you today?', isUser: false },
      ]);
      setWelcomeMessageSent(true); // Set to true after sending the welcome message
    }
  }, [isOpen, welcomeMessageSent]);

  return (
    <Box padding="20px" position="fixed" bottom="20px" right="20px" zIndex="1000">
      <Box position="relative">
        <Image
          w={"60px"}
          src={MiniBot}
          onClick={toggleChatbot}
          aria-label={isOpen ? 'Close Chatbot' : 'Open Chatbot'}
          cursor="pointer" // Adds a pointer cursor for better UX
        />
        {isOpen && (
          <Box
            paddingInline={"8px"}
            padding={"5px"}
            backgroundColor={"white"}
            position="absolute"
            right="10px"
            top="10px"
            borderRadius="lg"
            boxShadow="lg" // You can adjust the shadow size or use specific values
          >
            <Image
              src={Close}
              onClick={toggleChatbot} // Toggles the chatbot when clicked
              cursor="pointer" // Adds a pointer cursor for better UX
            />
          </Box>
        )}

        <Collapse boxShadow="lg" in={isOpen}>
          <Box
            borderRadius="lg"
            bg="white"
            boxShadow="lg"
            width="400px"
            height="80vh"
            display="flex"
            flexDirection="column"
            mt={2} // Add some margin to the top for better spacing
          >
            <Box flex="1" overflowY="auto" p={4}>
              <VStack spacing={2} align="stretch">
                {messages.map((msg, index) => (
                  <HStack
                    key={index}
                    justify={msg.isUser ? 'flex-end' : 'flex-start'}
                  >
                    <Box
                      bg={msg.isUser ? '#4FD1C599' : 'gray.200'}
                      color={'#041039'}
                      borderRadius="lg"
                      p={2}
                      maxWidth="80%"
                    >
                      <Text>{msg.text}</Text>
                    </Box>
                  </HStack>
                ))}
              </VStack>
            </Box>
            <form onSubmit={handleSendMessage}>
              <HStack spacing={2} p={2}>
                <Input
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Type a message..."
                  variant="filled"
                  flex="1"
                />
                <Button type="submit" backgroundColor={"#4FD1C599"}>
                  Send
                </Button>
              </HStack>
            </form>
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
};
