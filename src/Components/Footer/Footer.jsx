
import { SassColor } from "sass";
import  "./Footer.scss";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="contact">
        <h1>Contact Info</h1>
      </div>

      <div className="container-grid">
        <div className="footer-about">
          <h3>VedXpert</h3>
          <p>
          VedXpert, your trusted online companion for Ayurvedic solutions.
           Explore a vast database of diseases, symptoms, and time-tested remedies,
            all in one user-friendly web app. Empower yourself with holistic health 
            knowledge and embrace the wisdom of Ayurveda for a healthier life.
          </p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul className="footer-social-icons">
            <li>
              <a href="#">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="#">
                <FaFacebook />
              </a>{" "}
            </li>
            <li>
              <a href="#">
                <FaInstagram/>
              </a>{" "}
            </li>
            <li>
              <a href="#">
                <FaYoutube />
              </a>{" "}
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Call Us</h3>
          <h3>+91 9876452868</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
