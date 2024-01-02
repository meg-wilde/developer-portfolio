import Link from "next/link";

const Header = () => (
  <div>
    <Link href="/">
      <p>Home</p>
    </Link>
    <Link href="/about">
      <p>About</p>
    </Link>
    <Link href="/projects">
      <p>Projects</p>
    </Link>
    <Link href="/contact">
      <p>Contact</p>
    </Link>
    <style jsx>{`
      div {
        background-color: #5d576b;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
      }

      p {
        color: #abebd2;
        text-decoration: none;
        margin-left: 20px;
        margin-right: 20px;
        padding-top: 20px;
      }

      p:hover {
        color: #d496a7;
        text-decoration: underline;
      }
    `}</style>
  </div>
);

export default Header;
