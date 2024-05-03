import Wrapper from "../assets/wrapper/Footer";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Wrapper>
      <div className="footer-center">
        <span className="copy">copyright &copy; GreenCastle-Tech {year}</span>
      </div>
    </Wrapper>
  );
};

export default Footer;
