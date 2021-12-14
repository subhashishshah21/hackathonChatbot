import { createChatBotMessage } from "react-chatbot-kit";

const botName = "Primeval Customer Care";

const config = {
  initialMessages: [
    createChatBotMessage(`नमस्कार! 
मेरो नाम ${botName} बोट 🤖। माफ गर्नुहोस्, डाक्टर अहिले उपलब्ध छैन। हामी अझै विकासको चरणमा छौँ । थप जानकारीको लागि कृपया निम्न कुञ्जी शब्दहरू प्रयोग गर्नुहोस्।    
1. डाक्टर (Doctor)
2. परीक्षणहरू (Tests)
3. स्थान (Location)
4. परामर्श (Counselling)`),
  ],

  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "black",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;
