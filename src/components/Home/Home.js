import "./home.css";

import { useAuth0 } from "@auth0/auth0-react";
import UserProfile from "../UserProfile";

const Home = () => {
  const { user, isAuthenticated } = useAuth0();
  const guestUser = {
    name: "John Doe",
  };

  return (
    <div className="pt-56">
      <UserProfile user={isAuthenticated ? user : guestUser} />
    </div>
  );
};

export default Home;
