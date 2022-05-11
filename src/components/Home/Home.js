import "./home.css";
import logo from "../../logo.svg";

import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton, LogoutButton } from "../AuthButton";
import UserProfile from "../UserProfile";

const Home = () => {
  const { user, isLoading, isAuthenticated } = useAuth0();
  console.log(isAuthenticated);

  return (
    <div className="container">
      {isAuthenticated ? (
        <>
          <UserProfile user={user} />
          <LogoutButton />
        </>
      ) : (
        <header className="text-3xl">
          <img src={logo} className="rounded" alt="logo" />
          <LoginButton />
        </header>
      )}

      <main>
        {isLoading ? <p>Loading...</p> : <pre>{JSON.stringify(user)}</pre>}
      </main>
    </div>
  );
};

export default Home;
