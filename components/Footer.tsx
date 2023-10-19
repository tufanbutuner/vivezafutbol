import Link from "next/link";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
        <Link href="/" target="_blank">
          <FaXTwitter size={24} />
        </Link>
        <Link href="https://www.instagram.com/vivezafutbol" target="_blank">
          <FaInstagram size={24} />
        </Link>
      </div>
      <p className="">&copy; Viveza Futbol</p>
    </div>
  );
}
