import {render, screen} from "@testing-library/react";
import WelcomePage from "pages/WelcomePage";
import {RecoilRoot} from "recoil";
import {BrowserRouter} from "react-router-dom";
import {userAtom} from "atoms/userAtom";

describe('Welcome page', function () {

  it('should render auth when there is no session', function () {
    render(
      <RecoilRoot>
        <BrowserRouter>
          <WelcomePage/>
        </BrowserRouter>
      </RecoilRoot>
    );
    expect(screen.getByText('Stytch User Auth Demo', {})).toBeTruthy();
  });

  it('should jump to dashboard upon completion', function () {
    const initialUserState = ({set}) => {
      set(userAtom, {"user_id": "random-id"});
    };
    render(
      <RecoilRoot initializeState={initialUserState}>
        <BrowserRouter>
          <WelcomePage/>
        </BrowserRouter>
      </RecoilRoot>
    );
    expect(window.location.pathname).toBe('/dashboard');
  });

});
