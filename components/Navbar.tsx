import Link from "next/link";

export default function Navbar() {
  return (
    <Link href={"/"}>
      <div className="navbar">
        <p className="navbar-header">VIVEZA</p>
      </div>
    </Link>
  );
}
