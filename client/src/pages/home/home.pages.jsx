
// import { useState } from "react";

// import SuperTokens, { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
// import ThirdPartyEmailPassword, {
//     ThirdPartyEmailPasswordAuth,
//     Google,
//     Github,
//     Apple,
// } from "supertokens-auth-react/recipe/thirdpartyemailpassword";
// import Session from "supertokens-auth-react/recipe/session";
// import Auth from "./Auth";
// import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

// import SessionExpiredPopup from "./SessionExpiredPopup";

// export function getApiDomain() {
//     const apiPort = process.env.REACT_APP_API_PORT || 3001;
//     const apiUrl = process.env.REACT_APP_API_URL || `http://localhost:${apiPort}`;
//     return apiUrl;
// }

// export function getWebsiteDomain() {
//     const websitePort = process.env.REACT_APP_WEBSITE_PORT || 3000;
//     const websiteUrl = process.env.REACT_APP_WEBSITE_URL || `http://localhost:${websitePort}`;
//     return websiteUrl;
// }

// SuperTokens.init({
//     appInfo: {
//         appName: "SuperTokens Demo App", // TODO: Your app name
//         apiDomain: getApiDomain(), // TODO: Change to your app's API domain
//         websiteDomain: getWebsiteDomain(), // TODO: Change to your app's website domain
//     },
//     recipeList: [
//         ThirdPartyEmailPassword.init({
//             signInAndUpFeature: {
//                 providers: [Github.init(), Google.init(), Apple.init()],
//             },
//             emailVerificationFeature: {
//                 mode: "REQUIRED",
//             },
//         }),
//         Session.init(),
//     ],
// });

        // <Router>
        //         <div className="fill">
        //             <Routes>
        //                 {/* This shows the login UI on "/auth" route */}
        //                 {getSuperTokensRoutesForReactRouterDom(require("react-router-dom"))}
        //                 <Route
        //                     path="/"
        //                     element={
        //                         /* This protects the "/" route so that it shows 
        //                            <Home /> only if the user is logged in.
        //                            Else it redirects the user to "/auth" */
        //                         <ThirdPartyEmailPasswordAuth
        //                             onSessionExpired={() => {
        //                                 updateShowSessionExpiredPopup(true);
        //                             }}>
        //                             <Auth />
        //                             {showSessionExpiredPopup && <SessionExpiredPopup />}
        //                         </ThirdPartyEmailPasswordAuth>
        //                     }
        //                 />
        //             </Routes>
        //         </div>
        //     </Router>
function Home() {
//   let [showSessionExpiredPopup, updateShowSessionExpiredPopup] = useState(false);
  return (
    <div>
        Home

    </div>
  )
}

export default Home