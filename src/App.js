import { Auth0Provider } from "@auth0/auth0-react";
import Home from "./components/Home";

function App() {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <Home />
    </Auth0Provider>
  );
}

export default App;
