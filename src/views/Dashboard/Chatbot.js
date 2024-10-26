// Set base URL for Axios
axios.defaults.baseURL = "http://localhost:5000";
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
import { FaPaperPlane, FaPaperclip, FaTimesCircle } from "react-icons/fa";
import { useState, useRef } from "react";
import axios from "axios";

import ChatBotImg from "../../assets/svg/BBT.svg"; // Assurez-vous que ce chemin est correct
import Header from "./Profile/components/Header";

export const ChatBot = () => {
  const [selectedFiles, setSelectedFiles] = useState([]); // État pour stocker les fichiers sélectionnés
  const [messages, setMessages] = useState([]); // État pour stocker les messages du chat
  const fileInputRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false); // Suivre si la zone de saisie est étendue
  const [visible, setVisible] = useState(true);

  // Fonction pour envoyer la question au backend Flask et recevoir la réponse
  const getResponse = async (question) => {
    try {
      const response = await axios.post("/chatbot", { user_input: question });
      return response.data.response; // Récupère la réponse textuelle
    } catch (error) {
      console.error("Erreur lors de la récupération de la réponse du chatbot :", error);
      return "Sorry, I am unable to process your request at the moment. Please try again later.";
    }
  };

  // Fonction pour envoyer des fichiers au backend
// Function for sending files to the backend
const uploadFiles = async (file) => {
  const formData = new FormData();
  formData.append('file', file); // Use 'file' as the key to match the backend

  try {
    const response = await axios.post("/upload", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data; // Return the entire response to get the download link or error
  } catch (error) {
    console.error("Erreur lors de l'envoi du fichier :", error);
    return { error: "Sorry, I am unable to upload your file at the moment." };
  }
};

const handleAskChatBot = async () => {
  setVisible(false);
  const inputField = document.getElementById("chat-input");
  const question = inputField.value;

  if (selectedFiles.length > 0) {
    // If files are selected, upload the first file
    const file = selectedFiles[0]; // Get the first selected file
    const uploadResponse = await uploadFiles(file);
    
    if (uploadResponse.download_link) {
      // Display download link in the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: `Your file has been downloaded succesfully !`, sender: "bot" }
      ]);

      // Trigger the download automatically
      const link = document.createElement('a');
      link.href = uploadResponse.download_link;
      link.download = "answers.csv"; // You can customize the filename here
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
    } else {
      setMessages((prevMessages) => [...prevMessages, { text: uploadResponse.error, sender: "bot" }]);
    }
    
    setSelectedFiles([]); // Reset selected files after upload
  } else if (question) {
    // Display user question in the chat
    setMessages((prevMessages) => [...prevMessages, { text: question, sender: "user" }]);
    inputField.value = "";

    // Retrieve response from the bot
    const answer = await getResponse(question);
    setMessages((prevMessages) => [...prevMessages, { text: answer, sender: "bot" }]);
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
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]); // Ajouter les nouveaux fichiers à la sélection actuelle
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

        {/* Zone d'affichage des messages */}
        <Box w="full" mt={4}>
          {messages.map((message, index) => (
            <Box
              key={index}
              textAlign={message.sender === "user" ? "left" : "right"}
              mb={2}
              p={2}
              borderBottomRightRadius={message.sender === "user" ? "0" : "md"}
              borderRadius="md"
              bg={message.sender === "user" ? "gray.100" : "teal.100"}
              maxW={"100%"}
              alignSelf={message.sender === "user" ? "flex-start" : "flex-end"}
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
    </Container>
  );
};
