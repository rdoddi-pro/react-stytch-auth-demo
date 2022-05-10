import {userAtom} from "../atoms/userAtom";
import {render, screen} from "@testing-library/react";
import {RecoilRoot} from "recoil";
import {BrowserRouter} from "react-router-dom";
import Dashboard from "pages/Dashboard";
import {StytchProvider} from "@stytch/stytch-react";
import renderWithStytchClient from "../../test/renderWithStytchClient";
import makeRenderWithProviders from "../../test/renderWithStytchClient";
import MockStytchClient from "../../test/MockStytchClient";

describe('Dashboard', function () {

  it('should render dashboard when user logged-in', function () {
    const initialUserState = ({set}) => {
      set(userAtom, {"user_id": "random-id"});
    };

    const render = makeRenderWithProviders({
      stytch: MockStytchClient,
      initializeState: initialUserState,
    })

    render(<Dashboard/>);
    expect(screen.getByText(/Congratulations - you're logged in!/i, {})).toBeTruthy();
  });

});
