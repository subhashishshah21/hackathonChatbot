class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  handleAppointment() {
    let x = Math.random().toString(36).substr(2);
    const botMessage = this.createChatbotMessage(`
        Your registration token is "${x}". Dr.Subhashish is avialable at following days and time:
        Dr-Subhashish: Sund-Tues-Thrus -> 05:00-09:00 PM

      `);

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
  handleAboutSubhashish() {
    const botMessage = this.createChatbotMessage(`
        Doctorate of Medicine (DM) in Cardiology (BPKIHS), Short term training course in Cardiology (AIIMS,New Delhi); Doctor of medicine (MD) in Internal Medicine(KU), MBBS Cardiology, Internal Medicine

        NMC Number: 11285
      `);

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
  handleAppointmentTime() {
    const botMessage = this.createChatbotMessage(`
       Dr-Subhashish: Sund-Tues-Thrus -> 05:00-09:00 PM
      `);

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
  defaultMsg() {
    const botMessage = this.createChatbotMessage(`
       माफ गर्नुहोस्, यो सुविधा उपलब्ध छैन। म अझै सिक्ने चरणमा छु
      `);

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
}

export default ActionProvider;
