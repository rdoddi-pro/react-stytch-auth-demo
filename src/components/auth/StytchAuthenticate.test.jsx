import {render} from "@testing-library/react";
import {StytchProvider} from "@stytch/stytch-react";
import {RecoilRoot} from "recoil";
import {BrowserRouter} from "react-router-dom";
import {AuthenticateOAuth} from "./StytchAuthenticate";

describe('OAuth', function () {

  it('should authenticate a valid token', function () {
    // TODO do something and validate a token
    // When token is mock-validated, it should redirect to /dashboard with user details
    render(
      <StytchProvider stytch={null}>
        <RecoilRoot>
          <BrowserRouter>
            <AuthenticateOAuth />
          </BrowserRouter>
        </RecoilRoot>
      </StytchProvider>
    );
    expect(window.location.pathname).toBe('/dashboard');
  });

});
