import React, { useEffect } from "react";
import "./style.scss";
import ScrollToBottom from "react-scroll-to-bottom";
const Messages = ({ messages, name }) => {
  useEffect(() => {
    console.log(messages, name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);
  return (
    <ScrollToBottom className="messageContainer">
      {messages.map((e, i) =>
        e.user === name ? (
          <div className="my message">
            <div>{e.text}</div>
          </div>
        ) : e.user === "admin" ? (
          <div className="admin message">
            <div>{e.text}</div>
          </div>
        ) : (
          <div className="other message">
            <div>{e.user}</div>
            <div className="text">{e.text}</div>
          </div>
        )
      )}
    </ScrollToBottom>
  );
};

export default Messages;
