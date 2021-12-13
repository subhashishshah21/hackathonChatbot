class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  handleLab() {
    const botMessage = this.createChatbotMessage(`बायोकेमिस्ट्री (Biochemistry)
साइटोलोजी (CYTOLOGY)
तरल पदार्थ विश्लेषण (FLUID ANALYSIS)
हेमाटोलोजी (HEAMATOLOGY)
हिस्टोप्याथोलोजी (HISTOPATHOLOGY)
इम्युनोलोजी (IMMUNOLOGY)
माइक्रोबायोलोजी (MICROBIOLOGY)
प्यारासिटोलजी (PARASITOLOGY)`);

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
  handleLocation() {
    const botMessage = this.createChatbotMessage(`Sairam Marg, काठमाडौँ 44600
      Primevalhospital@gmail.com
      9843810334
    `);

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
  handleCounselling() {
    const botMessage = this.createChatbotMessage(
      "हामी हरेक शनिबार र आइतबार दिउँसो २ बजे देखि उपलब्ध छौँ "
    );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
  handleDrSudip() {
    const botMessage = this.createChatbotMessage(
      "Dr-Sudip: Sund-Mond-Tues -> 03:00-06:00 PM "
    );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
  handleDrSubhashish() {
    const botMessage = this.createChatbotMessage(
      "Dr-Subhashish: Sund-Tues-Thrus -> 05:00-09:00 PM "
    );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
  handleDrAayush() {
    const botMessage = this.createChatbotMessage(
      "Dr-Aayush: Fri-Tues-Wed -> 02:00-06:00 PM "
    );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
  handleDrPrashish() {
    const botMessage = this.createChatbotMessage(
      "Dr-Prashish: Sund-Tues-Wed -> 06:00-09:00 AM "
    );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
  AboutDrPrashish() {
    const botMessage = this.createChatbotMessage(
      "Dr Prashish is an expert in the field of Endourology, Urinary Stone Management with LASER (Retrograde Intra-renal surgery) and treats cancer of kidney, bladder, penis, testis and prostate. He is highly skilled in latest minimally invasive surgeries like Mini PCNL, URSL and Bipolar TURP. His keen expertise also lies in urinary tract infections, male infertility and sexual problems. Currently he is working at B and C Medical college Teaching Hospital and Purbanchal Cancer Hospital, Birtamod, Jhapa"
    );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
  defaultMsg() {
    const botMessage = this.createChatbotMessage(
      "माफ गर्नुहोस्, यो सुविधा उपलब्ध छैन। म अझै सिक्ने चरणमा छु"
    );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
}

export default ActionProvider;
