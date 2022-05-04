import {userAtom} from "../atoms/userAtom";
import {render, screen} from "@testing-library/react";
import {RecoilRoot} from "recoil";
import {BrowserRouter} from "react-router-dom";
import Dashboard from "pages/Dashboard";
import {StytchProvider} from "@stytch/stytch-react";

describe('Dashboard', function () {

  it('should render dashboard when user logged-in', function () {
    const initialUserState = ({set}) => {
      set(userAtom, {"user_id": "random-id"});
    };
    render(
      <StytchProvider stytch={null}>
        <RecoilRoot initializeState={initialUserState}>
          <BrowserRouter>
            <Dashboard/>
          </BrowserRouter>
        </RecoilRoot>
      </StytchProvider>
    );
    expect(screen.getByText(/Congratulations - you're logged in!/i, {})).toBeTruthy();
  });

});
