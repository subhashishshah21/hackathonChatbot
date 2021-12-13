class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    if (message.includes("doctor")) {
      this.actionProvider.handleDrSudip();
      this.actionProvider.handleDrSubhashish();
      this.actionProvider.handleDrPrashish();
      this.actionProvider.handleDrAayush();
    } else if (message.includes("lab")) {
      this.actionProvider.handleLab();
    } else if (message.includes("location")) {
      this.actionProvider.handleLocation();
    } else if (message.includes("counselling")) {
      this.actionProvider.handleCounselling();
    } else if (message.includes("prashish")) {
      this.actionProvider.handleDrPrashish();
      this.actionProvider.AboutDrPrashish();
    } else {
      this.actionProvider.defaultMsg();
    }
  }
}
export default MessageParser;
