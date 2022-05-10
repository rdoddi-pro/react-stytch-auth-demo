import React, {useEffect} from 'react';
import {useStytchLazy, useStytchUser} from '@stytch/stytch-react';
import {useNavigate} from "react-router-dom";
import {useSetRecoilState} from "recoil";
import {userAtom} from "atoms/userAtom";

export const AuthenticateOAuth = () => {

  const user = useStytchUser();
  const stytchClient = useStytchLazy();
  const setUserState = useSetRecoilState(userAtom);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params?.get('token');
    if (token) {
      stytchClient.oauth.authenticate(token, {
        session_duration_minutes: 30,
      }).then((res) => {
        console.log("AuthenticateOAuth:" + res.user_id);
      });
    }
  }, [stytchClient.oauth]);

  let navigate = useNavigate();
  useEffect(() => {
    if (user) {
      // make a call to backend to fetch user details
      // setAuthenticated(true);
      setUserState({
        user_id: user.user_id,
        first_name: user.name.first_name,
        last_name: user.name.last_name,
        email: user.emails[0]?.email,
        profile_picture_url: user.providers[0]['profile_picture_url']
      });
      console.log(user.user_id);
      navigate('/dashboard')
    }
  }, [user]);

  return <React.Fragment/>;
};

export const AuthenticateEm = () => {

  const user = useStytchUser();
  const stytchClient = useStytchLazy();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params?.get('token');
    if (token) {
      stytchClient.magicLinks.authenticate(token, {
        session_duration_minutes: 30,
      }).then((res) => {
        console.log(res.user_id);
      });
    }
  }, [stytchClient]);

  let navigate = useNavigate();
  useEffect(() => {
    if (user) {
      // make a call to backend to fetch user details
      // setAuthenticated(true);
      navigate('/dashboard');
    }
  }, [user]);

  return <React.Fragment/>;
};
