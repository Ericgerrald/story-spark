import Wrapper from "../assets/wrapper/Hero";
import heroImg from "../assets/read-time.svg";
const Hero = () => {
  return (
    <Wrapper>
      <div className="hero-center">
        <div className="img-container">
          <img src={heroImg} alt="hero-img" className="img" />
        </div>
        <article>
          <h1>
            Story Time<span style={{ color: "#FFFF00" }}>!!</span>
          </h1>
          <p>Where Every Story Begins with a Spark</p>
        </article>
      </div>
    </Wrapper>
  );
};

export default Hero;
