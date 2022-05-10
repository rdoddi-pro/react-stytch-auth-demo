import {render, screen} from "@testing-library/react";
import {RecoilRoot} from "recoil";
import {BrowserRouter} from "react-router-dom";
import {StytchProvider} from "@stytch/stytch-react";
import {StytchLogin} from "components/auth/StytchLogin";
import makeRender from "../../../test/renderWithStytchClient";
import MockStytchClient from "../../../test/MockStytchClient";

describe('Login', function () {

  it('should render page', function () {
    const render = makeRender({
      stytch: MockStytchClient
    })
    render(<StytchLogin/>);
    expect(screen.getElementsByClassName=('sign-in-container')).toBeTruthy();
  });

});
