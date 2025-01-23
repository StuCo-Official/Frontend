import { useState } from "react";
import { AxiosError } from "axios";
import { getUserProfileByUsernameAPI } from "../../services/UserService";
import { UserProfile } from "../../models/UserProfile";
import toast from "react-hot-toast";

export const useFetchUserProfile = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isPending, setIsPending] = useState(false);

  const fetchUserProfile = async (username: string) => {
    setIsPending(true);
    try {
      const profile = await getUserProfileByUsernameAPI(username);
      setUserProfile(profile);
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

  return { userProfile, isPending, fetchUserProfile };
};

export default useFetchUserProfile;
