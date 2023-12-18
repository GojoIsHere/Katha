// import SideBar from "./SideBar";
// import Main from "./Main";
import "./Chat.css";
import { useState, useEffect } from "react";
const Chat = () => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState(null);
  const [previousChat, setPreviousChat] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(null);

  const createNewChat = () => {
    setMessage(null);
    setValue("");
    setCurrentTitle(null);
  };

  const handleClick = (uniqueTitle) => {
    setCurrentTitle(uniqueTitle);
    setMessage(null);
    setValue("");
  };

  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(
        "http://localhost:3001/completions",
        options
      );
      const data = await response.json();
      console.log("this is data", data);
      setMessage(data.choices[0].message);
      console.log("this is data: ", message);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(message);
  useEffect(() => {
    console.log(currentTitle, value, message);
    if (!currentTitle && value && message) {
      setCurrentTitle(value);
    }
    if (currentTitle && value && message) {
      setPreviousChat((prevChat) => [
        ...prevChat,
        {
          title: currentTitle,
          role: "user",
          content: value,
        },
        {
          title: currentTitle,
          role: message.role,
          content: message.content,
        },
      ]);
    }
  }, [message, currentTitle]);

  // console.log("this is previous chats : ", previousChat);

  const currentChat = previousChat.filter(
    (prevChat) => prevChat.title === currentTitle
  );
  console.log("this is current chat : ", currentChat);

  const uniqueTitles = Array.from(
    new Set(previousChat.map((prevChat) => prevChat.title))
  );
  // console.log("this is titles", uniqueTitles);

  return (
    <div className="app">
      <section className="sidebar">
        <button onClick={createNewChat}> New Chat</button>
        <ul className="history">
          {uniqueTitles?.map((uniqueTitle, index) => (
            <li key={index} onClick={() => handleClick(uniqueTitle)}>
              {uniqueTitle}
            </li>
          ))}
        </ul>
      </section>
      <section className="main">
        <ul className="feed">
          {currentChat.length > 0
            ? currentChat.map((chatMessage, index) => (
                <li key={index}>
                  <p className="role">{chatMessage.role}</p>
                  <p>{chatMessage.content}</p>
                  {console.log("this is field cChat: ", currentChat[0].role)}
                </li>
              ))
            : null}
        </ul>
        <div className="bottom_section">
          <div className="input_container">
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <div className="submit" onClick={getMessages}>
              submit
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Chat;
