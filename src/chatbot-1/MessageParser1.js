class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    if (message.includes("book")) {
      this.actionProvider.handleAppointment();
    } else if (message.includes("about")) {
      this.actionProvider.handleAboutSubhashish();
    } else if (message.includes("appointment time")) {
      this.actionProvider.handleAppointmentTime();
    } else {
      this.actionProvider.defaultMsg();
    }
  }
}
export default MessageParser;
