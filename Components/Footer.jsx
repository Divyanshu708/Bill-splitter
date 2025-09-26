import github from "../src/assets/github.svg";
import twitter from "../src/assets/twitter.svg";
import linkedin from "../src/assets/linkedin.svg";

function Footer() {
  return (
    <div className="absolute bottom-8 right-10 sm:right-15  flex gap-7">
      <a href="https://github.com/Divyanshu708/Bill-splitter">
        <img
          src={github}
          alt="github"
          className="hover:scale-110 cursor-pointer transition-all"
        />
      </a>
      {/* <a href="https://www.linkedin.com/in/divyanshu-bhagat-95985a227/ ">
        <img
          src={twitter}
          alt="twitter"
          className="hover:scale-110 cursor-pointer transition-all"
        />
      </a>
      <a href="https://x.com/DivyanshuBt">
        <img
          src={linkedin}
          alt="linkedin"
          className="hover:scale-110 cursor-pointer transition-all"
        />
      </a> */}
    </div>
  );
}

export default Footer;
