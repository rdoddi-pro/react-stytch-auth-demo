import React from "react";
import {OAuthProvidersTypes, OneTapPositions, SDKProductTypes, Stytch} from "@stytch/stytch-react";
import styled from "styled-components";

export const StyledBodyDiv = styled.div`
  padding-left: 0.5rem;
`;

const StyledDiv = styled.div`
  @media (min-width: 56.0625rem) {
    border-radius: 0.5rem;
    border: solid 0.0625rem #ababab;
    background-color: #ffffff;
    padding: 2rem 2.4375rem 1.625rem 2.125rem;
    text-align: center;
    width: 24rem;
    margin-top: 5rem;
    margin-left: 3rem;
  }
  @media (max-width: 56.0625rem) {
    margin-top: 1.375rem;
    border-radius: 0.5rem;
    border: solid 0.0625rem #ababab;
    background-color: #ffffff;
    padding: 0.5rem 2.5rem 1.5rem 2rem;
    text-align: center;
    font-size: 0.9375rem;
  }
`;

const REDIRECT_URL_BASE = process.env.REACT_APP_STYTCH_REDIRECT_URL_BASE;

const loginOrSignupViewConfig = {
  emailMagicLinksOptions: {
    createUserAsPending: true,
    loginExpirationMinutes: 30,
    loginRedirectURL: REDIRECT_URL_BASE + '/em',
    signupExpirationMinutes: 30,
    signupRedirectURL: REDIRECT_URL_BASE + '/em',
  },
  oauthOptions: {
    loginRedirectURL: REDIRECT_URL_BASE + '/oauth',
    signupRedirectURL: REDIRECT_URL_BASE + '/oauth',
    providers: [
      {
        one_tap: true,
        position: OneTapPositions.embedded,
        type: OAuthProvidersTypes.Google,
      },
      {
        type: OAuthProvidersTypes.Apple,
      },
      {
        type: OAuthProvidersTypes.Facebook,
        custom_scopes: ['user_photos'],
      },
      {
        type: OAuthProvidersTypes.Microsoft,
        custom_scopes: ['https://graph.microsoft.com/calendars.read'],
      },
    ],
  }, products: [
    SDKProductTypes.oauth,
    SDKProductTypes.emailMagicLinks,
  ],
};

export const StytchLogin = () => {
  const STYTCH_PUBLIC_TOKEN = process.env.REACT_APP_STYTCH_PUBLIC_TOKEN;
  return (
    <StyledDiv>
      <StyledBodyDiv>
        <div className="sign-in-container">
          <Stytch
            publicToken={STYTCH_PUBLIC_TOKEN}
            loginOrSignupView={loginOrSignupViewConfig}
          />
        </div>
      </StyledBodyDiv>
    </StyledDiv>
  );
};
