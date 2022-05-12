import AuthButton from "./AuthButton";
import { useAuth0 } from "@auth0/auth0-react";
const LogoutButton = (props) => {
  const { logout } = useAuth0({ redirectTo: window.location.origin });

  return (
    <AuthButton onClick={logout} id="qa_logoutbutton" {...props}>
      Log out
    </AuthButton>
  );
};

export default LogoutButton;
