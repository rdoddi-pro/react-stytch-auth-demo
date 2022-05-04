import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {userAtom} from "atoms/userAtom";

const defaultOnRedirecting = () => {
};

export const withAuthRequired = (Component, options = {}) => {

  return function WithAuthRequired(props) {
    const navigate = useNavigate();
    const user = useRecoilValue(userAtom);
    const isAuthenticated = user?.user_id;
    const {
      onRedirecting = defaultOnRedirecting,
      claimCheck = () => true,
      loginWithRedirect = () => {
        navigate('/');
      },
      loginOptions,
    } = options;

    /**
     * Route is authenticated if the user has valid auth and there are no JWT claim mismatches.
     */
    const routeIsAuthenticated = isAuthenticated && claimCheck(user);

    useEffect(() => {
      if (routeIsAuthenticated) {
        return;
      }
      (async () => {
        await loginWithRedirect({...loginOptions});
      })();
    }, [routeIsAuthenticated, loginOptions, loginWithRedirect]);

    return routeIsAuthenticated ? <Component {...props} /> : onRedirecting();
  }
};
