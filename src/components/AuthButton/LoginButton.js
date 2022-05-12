import AuthButton from "./AuthButton";
import { useAuth0 } from "@auth0/auth0-react";
const LoginButton = (props) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <AuthButton onClick={loginWithRedirect} id="qa_loginbutton" {...props}>
      Log in
    </AuthButton>
  );
};

export default LoginButton;
