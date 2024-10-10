import { Monitor } from "lucide-react";


const Footer = () => {
  return (
    <footer className=" flex bg-slate-500 p-16 ">
      <h1>Footer</h1>
      <ul>
        <li>
          <a href="">LinkedIn</a>
        </li>
        <li>
          <a href="">Github</a>
        </li>
        <li>
          <a href="">
            <span>
              <Monitor />
            </span>
            Portfolio
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
