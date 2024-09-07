import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaRss, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function SocialMedia() {
  return (
    <div>
      <div className="text-colorCustom2 flex flex-wrap justify-start mx-5 sm:justify-center gap-4 mt-16 text-sm tracking-tight">
        <div className="flex items-center gap-3 cursor-pointer">
            <Link className="p-2 border-[1px] border-colorCustom2 border-opacity-50 hover:border-opacity-100 transition-all duration-300">
                <FaInstagram className="text-xl" />
            </Link>
            <span>Instagram</span>
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
            <Link className="p-2 border-[1px] border-colorCustom2 border-opacity-50 hover:border-opacity-100 transition-all duration-300">
                <FaFacebookF />
            </Link>
            <span>Facebook</span>
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
            <Link className="p-2 border-[1px] border-colorCustom2 border-opacity-50 hover:border-opacity-100 transition-all duration-300">
                <FaRss />
            </Link>
            <span>-RSS</span>
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
            <Link className="p-2 border-[1px] border-colorCustom2 border-opacity-50 hover:border-opacity-100 transition-all duration-300">
                <FaTwitter />
            </Link>
            <span>Twitter</span>
        </div>
      </div>
    </div>
  )
}

export default SocialMedia
