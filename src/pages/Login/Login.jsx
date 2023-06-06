import { useEffect, useState } from "react";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useSelector } from "react-redux";
import { getUser } from "../../redux/selectors";

const Login = () => {
  const [value, setValue] = useState("");
  const user = useSelector(getUser);
  console.log(user);

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  return (
    <div>
      {value ? (
        <p>Hello {value} </p>
      ) : (
        <button onClick={handleClick}>Sign In with Google</button>
      )}
    </div>
  );
};

export default Login;
