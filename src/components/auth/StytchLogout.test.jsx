import {userAtom} from "atoms/userAtom";
import {act, fireEvent, render, screen} from "@testing-library/react";
import {RecoilRoot} from "recoil";
import {BrowserRouter} from "react-router-dom";
import {StytchProvider} from "@stytch/stytch-react";
import {StytchLogout} from "components/auth/StytchLogout";
import makeRenderWithProviders from "../../../test/renderWithStytchClient";
import MockStytchClient from "../../../test/MockStytchClient";

describe('Logout', function () {

  it('should render page', function () {
    const initialUserState = ({set}) => {
      set(userAtom, {"user_id": "random-id"});
    };

    const render = makeRenderWithProviders({
      stytch: MockStytchClient,
      initializeState: initialUserState,
    })

    render(<StytchLogout/>);
    expect(screen.getByTestId('logout-btn', {})).toBeTruthy();
  });

  it('should direct to start page upon logout action', async function () {
    const initialUserState = ({set}) => {
      set(userAtom, {"user_id": "random-id"});
    };

    MockStytchClient.session.revoke.mockResolvedValue({});

    const render = makeRenderWithProviders({
      stytch: MockStytchClient,
      initializeState: initialUserState,
    })

    render(<StytchLogout/>);
    const logoutBtn = screen.getByTestId('logout-btn', {});
    await act(async () => {
      await fireEvent.click(logoutBtn);
    });
    expect(window.location.pathname).toBe('/start');
  });
});
