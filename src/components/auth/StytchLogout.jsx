import React, {useCallback} from 'react';
import {useStytchLazy} from '@stytch/stytch-react';
import {useNavigate} from "react-router-dom";
import {useSetRecoilState} from "recoil";
import {userAtom} from "atoms/userAtom";
import {Button} from "@mui/material";

export const StytchLogout = () => {

  const stytchClient = useStytchLazy();
  const navigate = useNavigate();
  const setUserState = useSetRecoilState(userAtom);
  const logout = useCallback(() => {
    stytchClient.session.revoke().then((r) => {
      console.log("Revoked: " + r);
      setUserState({});
      navigate('/');
    });
  }, [stytchClient, setUserState, navigate]);

  return (
    <Button
      variant={"outlined"}
      color={"warning"}
      onClick={logout}
      data-testid='logout-btn'
    >
      Log out
    </Button>
  );
};
