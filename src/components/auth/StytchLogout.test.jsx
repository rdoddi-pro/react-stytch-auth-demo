import {userAtom} from "atoms/userAtom";
import {fireEvent, render, screen} from "@testing-library/react";
import {RecoilRoot} from "recoil";
import {BrowserRouter} from "react-router-dom";
import {StytchProvider} from "@stytch/stytch-react";
import {StytchLogout} from "components/auth/StytchLogout";

describe('Logout', function () {

  it('should render page', function () {
    const initialUserState = ({set}) => {
      set(userAtom, {"user_id": "random-id"});
    };
    render(
      <StytchProvider stytch={null}>
        <RecoilRoot initializeState={initialUserState}>
          <BrowserRouter>
            <StytchLogout/>
          </BrowserRouter>
        </RecoilRoot>
      </StytchProvider>
    );
    expect(screen.getByTestId('logout-btn', {})).toBeTruthy();
  });

  it('should direct to start page upon logout action', function () {
    const initialUserState = ({set}) => {
      set(userAtom, {"user_id": "random-id"});
    };
    render(
      <StytchProvider stytch={null}>
        <RecoilRoot initializeState={initialUserState}>
          <BrowserRouter>
            <StytchLogout/>
          </BrowserRouter>
        </RecoilRoot>
      </StytchProvider>
    );
    const logoutBtn = screen.getByTestId('logout-btn', {});
    fireEvent.click(logoutBtn);
    expect(window.location.pathname).toBe('/start');
  });
});
