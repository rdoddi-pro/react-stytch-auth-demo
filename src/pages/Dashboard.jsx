import {useRecoilValue} from "recoil";
import {userAtom} from "atoms/userAtom";
import {default as SyntaxHighlighter} from "react-syntax-highlighter/dist/cjs/default-highlight";
import {docco} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import {StytchLogout} from "components/auth/StytchLogout";
import {withAuthRequired} from "components/hoc/withAuthRequired";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";

const Dashboard = () => {

  const userState = useRecoilValue(userAtom);

  return (
    <>
      <Typography sx={{marginLeft: 3, marginTop: 3}} variant='h4'>Congratulations - you're logged in! 🎉</Typography>
      <Box sx={{p: 3}}>
        <SyntaxHighlighter language="json" style={docco}>
          {JSON.stringify(userState, null, 2)}
        </SyntaxHighlighter>
        <Box sx={{marginTop: 5}}>
          <StytchLogout/>
        </Box>
      </Box>
    </>
  )
};

export default withAuthRequired(Dashboard);
