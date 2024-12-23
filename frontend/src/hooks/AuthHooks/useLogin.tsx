import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../../services/AuthService";
import toast from "react-hot-toast";
import { useUserContext } from "../../context/UserContext";

export const useLogin = () => {
  const navigate = useNavigate();
  const { setUser } = useUserContext();
  const [isPending, setIsPending] = useState(false); // Manage loading state

  const loginUser = async (username: string, password: string) => {
    const success = handleInputErrors(username, password);
		if (!success) return;
    setIsPending(true); 
    try {
      const res = await loginAPI(username, password);
      if (res) {
        localStorage.setItem("user", JSON.stringify(res));
        setUser(res);
        toast.success("Login Success!");
        navigate("/home");
      }
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response?.data?.error || "An unexpected error occurred"
          : "An unexpected error occurred";
      toast.error(errorMessage);
    } finally {
      setIsPending(false);
    }
  };

  return { loginUser, isPending };
};
export default useLogin;

function handleInputErrors(username : string, password : string) {
	if (!username || !password) {
		toast.error("Please fill in all fields");
		return false;
	}

	return true;
}
