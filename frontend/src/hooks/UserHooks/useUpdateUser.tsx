import { AxiosError } from "axios";
import { useState } from "react";
import { useUserContext } from "../../context/UserContext";
import { updateUserAPI } from "../../services/UserService";
import toast from "react-hot-toast";
import { UserProfile } from "../../models/UserProfile";

export const useUpdateUser = () => {
  const { setUser } = useUserContext();
  const [isPending, setIsPending] = useState(false);

  const updateUser = async (userData: Partial<UserProfile>, currentPassword?: string, newPassword?: string) => {
    const success = handlePasswordErrors(currentPassword, newPassword);
    if (!success) return;

    setIsPending(true); 
    try {
      const updatedUser = await updateUserAPI(userData, currentPassword, newPassword);
      console.log(updatedUser);
      if (updatedUser) {
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setUser(updatedUser);
        toast.success("Profile updated successfully!");
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

  return { updateUser, isPending };
};
export default useUpdateUser;

function handlePasswordErrors(currentPassword?: string, newPassword?: string) {
  if ((currentPassword && !newPassword) || (!currentPassword && newPassword)) {
    toast.error("Please provide both current and new passwords to change your password");
    return false;
  }

  if (newPassword && newPassword.length < 6) {
    toast.error("New password must be at least 6 characters long");
    return false;
  }

  return true;
}
