import * as React from 'react';
import {useEffect} from 'react';
import {StytchLogin} from "components/auth/StytchLogin";
import {useNavigate} from "react-router-dom";
import {useRecoilState} from "recoil";
import {userAtom} from "../atoms/userAtom";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";

export default function WelcomePage() {

  const [userState,] = useRecoilState(userAtom);

  const navigate = useNavigate();

  useEffect(() => {
    if (userState?.user_id) {
      navigate('/dashboard');
    }
  }, [userState, navigate]);

  return (
    <>
      <Typography sx={{marginLeft: 3, marginTop: 3}} variant='h4'>Stytch User Auth Demo</Typography>
      <Box sx={{width: '100%'}}>
        <StytchLogin/>
      </Box>
    </>
  );
}
