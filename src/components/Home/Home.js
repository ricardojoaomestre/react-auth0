import "./home.css";

import { useAuth0 } from "@auth0/auth0-react";
import UserProfile from "../UserProfile";
import ReactCountryFlag from "react-country-flag";

const Home = () => {
  const { user, isAuthenticated } = useAuth0();
  console.log(user);
  return (
    <div className="pt-56">
      {isAuthenticated ? (
        <>
          <UserProfile
            title={`Hi! I'm ${user.name}!`}
            subtitle={
              <div className="flex flex-row items-center gap-2 text-md">
                <ReactCountryFlag countryCode={user?.locale?.split("-")[0]} />
                <p>{user.email}</p>
              </div>
            }
            photo={user.picture}
          />
        </>
      ) : (
        <>
          <UserProfile
            title="Hi! I'm John Doe!"
            subtitle="Please login to let me know a little bit about yourself"
          />
        </>
      )}
    </div>
  );
};

export default Home;
