import style from "./Landing.module.scss";
import Lottie from "../../assets/Lotties/index";
import { Link } from "react-router-dom";
const Landing = () => {
  const scrollToBottom = () => {
    const offset = 658;
    window.scrollBy({
      top: offset,
      behavior: "smooth",
    });
  };

  return (
    <div className={style.landing}>
      <div className={style.landingContainer}>
        <div className={style.leftlanding}>
          <h1>Welcome to VedXpert</h1>
          <p>
            Your Ayurvedic Health Partner. Explore ailments, symptoms, and
            remedies. Embrace Ayurveda for a healthier you. Empower yourself
            with holistic health knowledge and embrace the wisdom of Ayurveda
            for a healthier life.
            {/* Join our community of well-being seekers today.  */}
          </p>
          <div className={style.landingbuttons}>
            <button onClick={scrollToBottom}>Explore Now</button>
            <Link to="/about">
              <button>Know More</button>
            </Link>
          </div>
        </div>
        <div className={style.rightlanding}>
          <Lottie />
        </div>
      </div>
    </div>
  );
};

export default Landing;
