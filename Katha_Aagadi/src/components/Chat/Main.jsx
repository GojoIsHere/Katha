import "./Chat.css";
const Main = () => {
  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: "hello how are you ?",
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
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <ul className="feed">Chat with bot</ul>
      <div className="bottom_section">
        <div className="input_container">
          <input type="text" />
          <div className="submit" onClick={getMessages}>
            submit
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;
