import * as stytch from '@stytch/stytch-react';
import {AuthenticateOAuth, AuthenticateEm} from "./StytchAuthenticate";
import makeRender from "../../../test/renderWithStytchClient";
import MockStytchClient from "../../../test/MockStytchClient";

describe('OAuth', function () {

  let originalLocation;

  beforeEach(() => {
    originalLocation = window.location;
    jest.resetAllMocks();
  });

  afterEach(() => {
    window.location = originalLocation;
  })

  it('should call oauth.authenticate when there is a token in the URL', function () {
    delete window.location
    window.location = new URL('https://www.example.com?token=mock-token')

    MockStytchClient.oauth.authenticate.mockResolvedValue({
      user_id: 'mock_user_id'
    });

    const render = makeRender({
      stytch: MockStytchClient,
    })
    // When token is mock-validated, it should redirect to /dashboard with user details
    render(<AuthenticateOAuth/>);
    expect(MockStytchClient.oauth.authenticate).toHaveBeenCalledWith('mock-token', {
      session_duration_minutes: 30
    });
  });

  it('should not call oauth.authenticate when there is no token', function () {
    delete window.location
    window.location = new URL('https://www.example.com')

    MockStytchClient.oauth.authenticate.mockResolvedValue({
      user_id: 'mock_user_id'
    });

    const render = makeRender({
      stytch: MockStytchClient,
    })
    // When token is mock-validated, it should redirect to /dashboard with user details
    render(<AuthenticateOAuth/>);
    expect(MockStytchClient.oauth.authenticate).not.toHaveBeenCalled();
  });

  it('should redirect to /dashboard if the user is logged in', function () {
    const mockUseStytchUser = jest.spyOn(stytch, 'useStytchUser');
    const mockUser = {
      user_id: 'mock_user_id',
      name: {
        first_name: 'mock_first_name',
        last_name: 'mock_first_name',
      },
      emails: [{email: 'mock@example.com'}],
      providers: [{profile_picture_url: 'https://example.com/profile.png'}]
    };

    mockUseStytchUser.mockReturnValue(mockUser);

    const render = makeRender({
      stytch: MockStytchClient,
    })
    render(<AuthenticateOAuth/>);
    expect(window.location.pathname).toBe('/dashboard');
  });
});

describe('EML', function () {

  let originalLocation;

  beforeEach(() => {
    originalLocation = window.location;
    jest.resetAllMocks();
  });

  afterEach(() => {
    window.location = originalLocation;
  })

  it('should call magicLinks.authenticate when there is a token in the URL', function () {
    delete window.location
    window.location = new URL('https://www.example.com?token=mock-token')

    MockStytchClient.magicLinks.authenticate.mockResolvedValue({
      user_id: 'mock_user_id'
    });

    const render = makeRender({
      stytch: MockStytchClient,
    })
    // When token is mock-validated, it should redirect to /dashboard with user details
    render(<AuthenticateEm/>);
    expect(MockStytchClient.magicLinks.authenticate).toHaveBeenCalledWith('mock-token', {
      session_duration_minutes: 30
    });
  });

  it('should not call magicLinks.authenticate when there is no token', function () {
    delete window.location
    window.location = new URL('https://www.example.com')

    MockStytchClient.magicLinks.authenticate.mockResolvedValue({
      user_id: 'mock_user_id'
    });

    const render = makeRender({
      stytch: MockStytchClient,
    })
    // When token is mock-validated, it should redirect to /dashboard with user details
    render(<AuthenticateEm/>);
    expect(MockStytchClient.magicLinks.authenticate).not.toHaveBeenCalled();
  });

  it('should redirect to /dashboard if the user is logged in', function () {
    const mockUseStytchUser = jest.spyOn(stytch, 'useStytchUser');
    const mockUser = {
      user_id: 'mock_user_id',
      name: {
        first_name: 'mock_first_name',
        last_name: 'mock_first_name',
      },
      emails: [{email: 'mock@example.com'}],
      providers: [{profile_picture_url: 'https://example.com/profile.png'}]
    };

    mockUseStytchUser.mockReturnValue(mockUser);

    const render = makeRender({
      stytch: MockStytchClient,
    })
    render(<AuthenticateEm/>);
    expect(window.location.pathname).toBe('/dashboard');
  });
});
