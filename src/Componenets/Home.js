import React, { useEffect, useState, useContext } from "react";
import "./Home.css";
import Nav from "./Nav";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./chatbot.css";
import config from "../Chatbot/config.js";
import MessageParser from "../Chatbot/MessageParser";
import ActionProvider from "../Chatbot/ActionProvider.js";
import InfoContext from "../context/InfoContext";

import config1 from "../chatbot-1/config1";
import MessageParser1 from "../chatbot-1/MessageParser1";
import ActionProvider1 from "../chatbot-1/ActionProvider1";

export default function Body() {
  const [showchat, setshowchat] = useState(false);
  const [primevalbot, setprimevalbot] = useState(true);
  const [online, setonline] = useState(false);
  const context = useContext(InfoContext);
  const { fetchDoctors, isactive, name, appoint } = context;
  useEffect(() => {
    async function checkonline() {
      await fetchDoctors();
    }
    checkonline();
    setonline(!isactive);
  }, [isactive]);
  return (
    <>
      <Nav menu={true} />
      <div
        className="main-container"
        style={{
          backgroundImage: "url(/images/primevalhosp.png)",
          backgroundPosition: "center",
        }}
      >
        <div className="text-quotes"></div>
        {showchat && (
          <div className="chat-box">
            <div className="chatbox-header">
              <div className="icon-title">
                <img src="./images/message.png" alt="" />
                <p>Message</p>
              </div>
              <div className="person-info">
                <p>Primeval Hospital</p>
              </div>
            </div>
            <div className="messenger">
              {primevalbot && (
                <Chatbot
                  config={config}
                  messageParser={MessageParser}
                  actionProvider={ActionProvider}
                  headerText="Welcome to Primeval Customer's Care"
                />
              )}
              {!primevalbot && !online && (
                <Chatbot
                  config={config1}
                  messageParser={MessageParser1}
                  actionProvider={ActionProvider1}
                  headerText="Welcome to Dr.Subhashish's Personal Bot"
                />
              )}
              {!primevalbot && online && (
                <div className="chat-message">
                  <div className="actualmessage">
                    <div className="botmessage">
                      <p>
                        {" "}
                        Hello! This is subhashish jung Shah. How may i help you?{" "}
                      </p>
                    </div>
                  </div>
                  <div className="send-message-container">
                    <a href="">
                      <img src="/images/Images.png" alt="" />
                    </a>

                    <textarea name="" id="" cols="50" rows="3"></textarea>
                    <a href="">
                      <img src="/images/sendmsg.png" alt="" />
                    </a>
                  </div>
                </div>
              )}

              <div className="online-check">
                <div className="online-check-items">
                  <img src="/images/onlinelogo.png" height="10px" alt="" />

                  <p>
                    {" "}
                    <button
                      className="online-btns"
                      onClick={() => setprimevalbot(true)}
                    >
                      Primeval Bot
                    </button>
                  </p>
                </div>
                <div className="online-check-items">
                  <img
                    src={online ? "/images/onlinelogo.png" : ""}
                    height="10px"
                    alt=""
                  />

                  <p>
                    {" "}
                    <button
                      className="online-btns"
                      onClick={() => setprimevalbot(false)}
                    >
                      Dr. {name}
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <button onClick={() => setshowchat(!showchat)} className="showchat-btn">
          <img src="/images/nurse.jpg" alt="" />
        </button>
      </div>
    </>
  );
}
