import { useState, useEffect } from "react";
import "./Chat.css";
const Main = () => {
  const [value, setValue] = useState(null);
  const [messages, setMessages] = useState(null);
  const [previousChat, setPreviousChat] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(null);

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
      console.log(data);
      setMessages(data.choices[0].message);
      console.log("this is data: ", messages);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(messages);
  useEffect(() => {
    console.log(currentTitle, value, messages);
    if (!currentTitle && value && messages) {
      setCurrentTitle(value);
    }
    if (currentTitle && value && messages) {
      setPreviousChat((prevChat) => [
        ...prevChat,
        {
          titile: currentTitle,
          role: "user",
          content: value,
        },
        {
          titile: currentTitle,
          role: messages.role,
          content: messages.content,
        },
      ]);
    }
  }, [messages, currentTitle]);
  return (
    <>
      <ul className="feed">Chat with bot</ul>
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
    </>
  );
};
export default Main;
