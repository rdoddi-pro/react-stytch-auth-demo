import {screen} from "@testing-library/react";
import WelcomePage from "pages/WelcomePage";
import {RecoilRoot} from "recoil";
import {BrowserRouter} from "react-router-dom";
import {userAtom} from "atoms/userAtom";
import makeRenderWithProviders from "../../test/renderWithStytchClient";
import MockStytchClient from "../../test/MockStytchClient";

describe('Welcome page', function () {

  it('should render auth when there is no session', function () {
    const render = makeRenderWithProviders({
      stytch: MockStytchClient,
    })

    render(<WelcomePage/>);
    expect(screen.getByText('Stytch User Auth Demo', {})).toBeTruthy();
  });

  it('should jump to dashboard upon completion', function () {
    const initialUserState = ({set}) => {
      set(userAtom, {"user_id": "random-id"});
    };

    const render = makeRenderWithProviders({
      stytch: MockStytchClient,
      initializeState: initialUserState,
    })

    render(<WelcomePage/>);
    expect(window.location.pathname).toBe('/dashboard');
  });

});
