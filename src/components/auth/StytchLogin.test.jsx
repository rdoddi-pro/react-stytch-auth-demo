import {render, screen} from "@testing-library/react";
import {RecoilRoot} from "recoil";
import {BrowserRouter} from "react-router-dom";
import {StytchProvider} from "@stytch/stytch-react";
import {StytchLogin} from "components/auth/StytchLogin";

describe('Login', function () {

  it('should render page', function () {
    render(
      <StytchProvider stytch={null}>
        <RecoilRoot>
          <BrowserRouter>
            <StytchLogin/>
          </BrowserRouter>
        </RecoilRoot>
      </StytchProvider>
    );
    expect(screen.getByText('Sign up or log in', {})).toBeTruthy();
  });

});
