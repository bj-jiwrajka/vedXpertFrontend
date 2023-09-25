import style from "./Landing.module.scss";
import Lottie from "../../assets/Lotties/index";
const Landing = () => {
  return (
    <div className={style.landing}>
      <div className={style.landingContainer}>
        <div className={style.leftlanding}>
          <h1>Welcome to VedXpert</h1>
          <p>
            Your Ayurvedic Health Partner. Explore ailments, symptoms, and
            remedies. Embrace Ayurveda for a healthier you. Join our community
            of well-being seekers today!
          </p>
          <div className={style.landingbuttons}>
            <button>Explore Now</button>
            <button>Get Started</button>
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
