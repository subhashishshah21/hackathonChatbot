import React, { useEffect, useState } from "react";
import "./Home.css";
import Nav from "./Nav";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./chatbot.css";
import config from "../Chatbot/config.js";
import MessageParser from "../Chatbot/MessageParser";
import ActionProvider from "../Chatbot/ActionProvider.js";

export default function Body() {
  const [primevalbot, setprimevalbot] = useState(true);
  return (
    <>
      <Nav menu={true} />
      <div
        className="main-container"
        style={{ backgroundImage: "url(/images/bg.png)" }}
      >
        <div className="text-quotes">
          <h1>PASSION FOR HEALING</h1>
          <h3>Learn More</h3>
        </div>
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
              />
            )}
            {!primevalbot && (
              <div className="user-on">
                <div>
                  <p>Dr.Sudip is currently unavialable</p>
                </div>
                <div className="chat-message">
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
                <img src="/images/onlinelogo.png" height="10px" alt="" />

                <p>
                  {" "}
                  <button
                    className="online-btns"
                    onClick={() => setprimevalbot(false)}
                  >
                    Dr. Aayush
                  </button>
                </p>
              </div>
              <div className="online-check-items">
                <img src="/images/onlinelogo.png" height="10px" alt="" />
                <p>
                  <button
                    className="online-btns"
                    onClick={() => setprimevalbot(false)}
                  >
                    Dr. Sudeep
                  </button>
                </p>
              </div>
              <div className="online-check-items">
                <i className="fas fa-circle"></i>
                <p>
                  <button
                    className="online-btns"
                    onClick={() => setprimevalbot(false)}
                  >
                    Dr. Subhashish
                  </button>
                </p>
              </div>
              <div className="online-check-items">
                <img src="/images/onlinelogo.png" height="10px" alt="" />
                <p>
                  <button
                    className="online-btns"
                    onClick={() => setprimevalbot(false)}
                  >
                    Dr. Prashish
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
