import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { logoutAPI } from "../../services/AuthService";
import toast from "react-hot-toast";
import { useUserContext } from "../../context/UserContext";

export const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useUserContext();

  const logout = async () => {
    setLoading(true);
    try {
      await logoutAPI();
      localStorage.removeItem("user");
      setUser(null);
      navigate("/");
    } catch (error) {
      toast.error("Logout failed");
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};
