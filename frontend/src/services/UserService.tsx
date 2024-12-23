import axios from "axios";
import { UserProfile } from "../models/UserProfile";

axios.defaults.withCredentials = true;

export const updateUserAPI = async (
    userData: Partial<UserProfile>, 
    currentPassword?: string,
    newPassword?: string ) => {
  try {
    const payload = {
        ...userData,
        ...(currentPassword?.trim() ? { currentPassword: currentPassword.trim() } : {}),
        ...(newPassword?.trim() ? { newPassword: newPassword.trim() } : {}),
    };

    const res = await axios.post(
      "/api/users/update",
      payload,
    );

    return res.data;
  } catch (error) {
    throw error; 
  }
};

export const getUserProfileByUsernameAPI = async (username: string) => {
  try {
    const res = await axios.get(`/api/users/profile/${username}`);
    console.log(res);
    return res.data; // Return user profile data
  } catch (error) {
    throw error; // Propagate the error for handling in the hook
  }
};
