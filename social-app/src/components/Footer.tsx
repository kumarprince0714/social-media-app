import dayjs from "dayjs";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentDate = dayjs().format("YYYY");
  return (
    <>
      <footer className=" bottom-0 left-0 right-0 mx-auto w-4/5 bg-white border-t border-gray-200 mt-auto">
        <div className="div1 w-full h-[363px] flex flex-row justify-between items-center">
          <div className="flex flex-col items-start space-y-3">
            <Link to="/about" className="text-black">
              About
            </Link>
            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/disclaimer">Disclaimer</Link>
            <Link to="/acceptable-use">Acceptable Use</Link>
          </div>
          <div className="flex flex-col items-start space-y-3">
            <Link to="/faq">FAQ</Link>
            <Link to="/policy">Complaints Policy</Link>
            <Link to="/cookie">Cookie Notice</Link>
            <Link to="/dmca">DMCA</Link>
            <Link to="/usc_2257">USC 2257</Link>
          </div>
          <div className="flex flex-col items-start space-y-3">
            <Link to="/contact">Contact</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/referral">Referral</Link>
            <Link to="/agreement">Standard Agreement</Link>{" "}
            <Link to="/share" className="font-bold">
              Share Social App
            </Link>
          </div>
        </div>
        <div className="bottom-0 text-center">
          &copy; Tarams Technologies &nbsp; {currentDate}
        </div>
      </footer>
    </>
  );
};

export default Footer;
