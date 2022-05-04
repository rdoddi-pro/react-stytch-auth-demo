import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {userAtom} from "atoms/userAtom";
import {useRecoilValue} from "recoil";

export const LandingPage = () => {
  const userState = useRecoilValue(userAtom);
  const navigate = useNavigate();
  useEffect(() => {
    userState?.user_id ? navigate('/dashboard') : navigate('/start');
  });
};
