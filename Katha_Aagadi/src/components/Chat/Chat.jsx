import SideBar from "./SideBar";
import Main from "./Main";
import "./Chat.css";
const Chat = () => {
  return (
    <div className="app">
      <section className="sidebar">
        <SideBar />
      </section>
      <section className="main">
        <Main />
      </section>
    </div>
  );
};
export default Chat;
