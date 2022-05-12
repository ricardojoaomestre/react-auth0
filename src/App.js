import { Auth0Provider } from "@auth0/auth0-react";
import Header from "./components/Header";
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
      <div className="h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="container mx-auto max-w-3xl">
          <Header />
          <Home />
        </div>
      </div>
    </Auth0Provider>
  );
}

export default App;
