import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home, Dashboard, Profile } from './pages';
import Auth from './Auth';
import { useState } from 'react'
import { Header } from './components';
import SuperTokens, { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
import ThirdPartyEmailPassword, {
  ThirdPartyEmailPasswordAuth,
  Google,
  Github,
  Apple,
} from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import Session from "supertokens-auth-react/recipe/session";
import SessionExpiredPopup from "./SessionExpiredPopup";

export function getApiDomain() {
  const apiPort = process.env.REACT_APP_API_PORT || 3001;
  const apiUrl = process.env.REACT_APP_API_URL || `http://localhost:${apiPort}`;
  return apiUrl;
}

export function getWebsiteDomain() {
  const websitePort = process.env.REACT_APP_WEBSITE_PORT || 3000;
  const websiteUrl = process.env.REACT_APP_WEBSITE_URL || `http://localhost:${websitePort}`;
  return websiteUrl;
}

SuperTokens.init({
  appInfo: {
    appName: "SuperTokens Demo App", // TODO: Your app name
    apiDomain: getApiDomain(), // TODO: Change to your app's API domain
    websiteDomain: getWebsiteDomain(), // TODO: Change to your app's website domain
  },
  recipeList: [
    ThirdPartyEmailPassword.init({
      signInAndUpFeature: {
        providers: [Github.init(), Google.init(), Apple.init()],
      },
      emailVerificationFeature: {
        mode: "REQUIRED",
      },
    }),
    Session.init(),
  ],
});

function App() {
  let [showSessionExpiredPopup, updateShowSessionExpiredPopup] = useState(false);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        {getSuperTokensRoutesForReactRouterDom(require("react-router-dom"))}
        <Route
          path="/auth"
          element={
            <ThirdPartyEmailPasswordAuth
              onSessionExpired={() => {
                updateShowSessionExpiredPopup(true);
              }}>
              <Auth />
              {showSessionExpiredPopup && <SessionExpiredPopup />}
            </ThirdPartyEmailPasswordAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
