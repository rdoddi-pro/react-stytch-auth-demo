import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AuthenticateEm, AuthenticateOAuth} from "components/auth/StytchAuthenticate";
import {LandingPage} from "pages/LandingPage";
import {default as WelcomePage} from "pages/WelcomePage";
import {default as Dashboard} from "pages/Dashboard";
import {RecoilRoot} from "recoil";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route path="/start" element={<WelcomePage/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/stytch/authenticate/">
            <Route path="em" element={<AuthenticateEm/>}/>
            <Route path="oauth" element={<AuthenticateOAuth/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
