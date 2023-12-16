import briefcase from "../../assets/Icons/briefcase.png";
import phone from "../../assets/Icons/phone.png";
import mail from "../../assets/Icons/mail.png";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <hr className="footer-hr" />
      <div className="footer">
        <div className="footer-wrapper">
          <div className="footer-component">
            <div className="footer-title">
              <img src={briefcase} alt="" />
              <h3>Navigation</h3>
            </div>
            <ol className="f-list">
              <li>
                <a href="">About us</a>
              </li>
            </ol>
          </div>
          <div className="footer-component">
            <div className="footer-title">
              <img src={briefcase} alt="" />
              <h3>Payments</h3>
            </div>
            <ol className="f-list">
              <li>
                <a href="">Cash on delivery</a>
              </li>
              <li>
                <a href="">Online payment</a>
              </li>
            </ol>
          </div>
          <div className="footer-component">
            <div className="footer-title">
              <img src={briefcase} alt="" />
              <h3>My Accounts</h3>
            </div>
            <ol className="f-list">
              <li>
                <a href="">Return the item</a>
              </li>
            </ol>
          </div>
          <div className="footer-component">
            <div className="footer-title">
              <img src={briefcase} alt="" />
              <h3>Contacts</h3>
            </div>
            <ol className="f-list">
              <li>
                <img src={phone} alt="" />
                <a href="">9845088542</a>
              </li>
              <li>
                <img src={mail} alt="" />
                <a href="">contact@hamromadira.com</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
