import {render, renderHook} from "@testing-library/react";
import {StytchProvider} from "@stytch/stytch-react";
import {RecoilRoot} from "recoil";
import {BrowserRouter} from "react-router-dom";

const makeTestWrapper = ({stytch, initializeState}) => function TestWrapper({children}) {
  return (
    <StytchProvider stytch={stytch}>
      <RecoilRoot initializeState={initializeState}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </RecoilRoot>
    </StytchProvider>
  )
}

export default function makeRender({stytch, initializeState}) {
  const TestWrapper = makeTestWrapper({stytch, initializeState});

  return function (ui, options,) {
    return render(ui, {...options, wrapper: TestWrapper});
  }
}


export function makeRenderHook({stytch, initializeState}) {
  const TestWrapper = makeTestWrapper({stytch, initializeState});

  return function (hook, options,) {
    return renderHook(hook, {...options, wrapper: TestWrapper});
  }
}
