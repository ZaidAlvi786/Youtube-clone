import { useDispatch, useSelector } from "react-redux";
import { setUser, logoutUser } from "../redux/userSlice";
import API from "../utils/api";

export default function AuthButton() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state:any) => state.user.isAuthenticated);

  const login = async () => {
    const response = await API.post("/auth/login", {
      email: "test@example.com",
      password: "password123",
    });
    dispatch(setUser(response.data.user));
  };

  const logout = () => {
    dispatch(logoutUser());
  };

  return isAuthenticated ? (
    <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={logout}>
      Logout
    </button>
  ) : (
    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={login}>
      Login
    </button>
  );
}
