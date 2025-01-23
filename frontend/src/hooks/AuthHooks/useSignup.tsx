import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupAPI } from "../../services/AuthService";
import toast from "react-hot-toast";
import { useUserContext } from "../../context/UserContext";

export const useSignup = () => {
  const navigate = useNavigate();
  const { setUser } = useUserContext();
  const [isPending, setIsPending] = useState(false);

  const signupUser = async (
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string
  ) => {
    setIsPending(true); 
    try {
      const res = await signupAPI(username, firstName, lastName, password, email);
      const data = res.data;
      if (data.accessToken && data.user) {
        localStorage.setItem("accessToken", data.token);
        localStorage.setItem("user", JSON.stringify(res));
        setUser(res);
        toast.success("Signup Success!");
        navigate("/home");
      } else {
        throw new Error("Invalid signup response");
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

  return { signupUser, isPending };
};