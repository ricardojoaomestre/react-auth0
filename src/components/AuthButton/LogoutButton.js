import AuthButton from "./AuthButton";
import { useAuth0 } from "@auth0/auth0-react";
const LogoutButton = (props) => {
  const { logout } = useAuth0();

  return (
    <AuthButton
      onClick={() =>
        logout({ redirectTo: process.env.REACT_APP_AUTH0_LOGOUT_REDIRECT_URL })
      }
      id="qa_logoutbutton"
      {...props}
    >
      Log out
    </AuthButton>
  );
};

export default LogoutButton;
