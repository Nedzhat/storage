import { useDispatch, useSelector } from "react-redux";

import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";

import { getUser } from "../../redux/selectors";
import { setUser } from "../../redux/user/userSlice";
import { Box } from "@chakra-ui/react";

const Login = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const handleClick = () => {
    signInWithPopup(auth, provider).then(({ user }) => {
      dispatch(
        setUser({
          name: user.displayName,
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        })
      );
    });
  };

  return (
    <Box as="section" w="60%" bg="bgColor" p={8} h="100vh">
      {user.email ? (
        <p>Hello {user.email} </p>
      ) : (
        <button onClick={handleClick}>Sign In with Google</button>
      )}
    </Box>
  );
};

export default Login;
