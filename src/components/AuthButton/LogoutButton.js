import AuthButton from "./AuthButton";
import { useAuth0 } from "@auth0/auth0-react";
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <AuthButton onClick={logout} id="qa_logoutbutton">
      Log out
    </AuthButton>
  );
};

export default LogoutButton;
