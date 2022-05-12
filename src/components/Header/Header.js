import logo from "../../logo.svg";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton, LogoutButton } from "../AuthButton";
const Header = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="flex justify-between items-center">
      <img src={logo} className="w-20 h-20" alt="logo" />
      <div className="">
        <nav className="inline-flex mr-6 text-white">
          <ul className="inline-flex gap-6 text-l box-border justify-center items-center">
            <li className="py-2 border-transparent border-b-2 hover:border-b-2 hover:border-white transition-colors duration-150">
              <a href="/">Link #1</a>
            </li>
            <li className="py-2 border-transparent border-b-2 hover:border-b-2 hover:border-white transition-colors duration-150">
              <a href="/">Link #1</a>
            </li>
            <li className="py-2 border-transparent border-b-2 hover:border-b-2 hover:border-white transition-colors duration-150">
              <a href="/">Link #1</a>
            </li>
          </ul>
        </nav>

        {isAuthenticated ? (
          <LogoutButton className="px-6 py-2 rounded-full cursor-pointer border-2 border-red-400 hover:border-red-500 transition-colors text-white" />
        ) : (
          <LoginButton className="px-6 py-2 rounded-full cursor-pointer bg-green-500 hover:bg-green-600 transition-colors text-white" />
        )}
      </div>
    </div>
  );
};

export default Header;
