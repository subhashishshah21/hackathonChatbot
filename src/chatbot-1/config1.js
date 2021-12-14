import { createChatBotMessage } from "react-chatbot-kit";

const botName = "Subhashish Bot";

const config = {
  initialMessages: [
    createChatBotMessage(`नमस्कार! 
मेरो नाम ${botName} बोट 🤖। Dr.Subhashish is currently unavialable. How may I help You?
1. About Doctor 
2. Subhashish's Appointment Time
3. Book me an appointment
`),
  ],

  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#5ccc9d",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;
