import "./About.scss";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>

      <div className="about-bottom">
        <div className="about-image">
          <img src="src/assets/images/about-us-2.jpg" />
        </div>
        <div className="about-content">
          <p className="about-text">
            VedXpert is your go-to online destination for comprehensive
            Ayurvedic solutions. With an extensive database of diseases,
            symptoms, and time-tested remedies, VedXpert provides a holistic
            approach to healthcare through the wisdom of Ayurveda. Whether you
            are seeking natural remedies, information about specific health
            conditions, or simply looking to embrace a healthier lifestyle,
            VedXpert has you covered.
          </p>
          <br></br>
          <p>
            VedXpert boasts a vast database that covers a wide range of diseases
            and health conditions. Users can easily access detailed information
            about various ailments, making it a valuable resource for both
            prevention and treatment.
          </p>
          <br></br>
          <p>
            Our user-friendly symptom checker allows individuals to input their
            symptoms and receive personalized suggestions based on Ayurvedic
            principles. This feature empowers users to gain a deeper
            understanding of their health and explore tailored remedies.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
