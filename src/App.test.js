import {render, screen} from '@testing-library/react';
import App from 'App';
import {StytchProvider} from "@stytch/stytch-react";
import {unmountComponentAtNode} from "react-dom";

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
})

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('App', function () {
  it('should render main component', function () {
    render(
      <StytchProvider stytch={null}>
        <App/>
      </StytchProvider>
    );
    expect(screen.getByText('Stytch User Auth Demo', {})).toBeEnabled();
  });
});
