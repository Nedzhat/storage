import { useSelector } from "react-redux";

export const useAuth = () => {
  const { email, token, id, isLoggedIn, isRefreshing } = useSelector(
    (state) => state.user
  );

  return {
    email,
    token,
    id,
    isLoggedIn,
    isRefreshing,
  };
};
