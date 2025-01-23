import { UserProfile } from "../models/UserProfile";
import { handleError } from "../helper/ErrorHandler";
import axiosInstance from "./ApiService";

// Ensure cookies are included with every request
axiosInstance.defaults.withCredentials = true;

export const getUserProfileAPI = async () => {
  try {
    const res = await axiosInstance.get<UserProfile>("/auth/getme");
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

export const loginAPI = async (username: string, password: string) => {
  try {
    const res = await axiosInstance.post("/auth/login", {
      username,
      password,
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const signupAPI = async (
  username: string,
  firstName: string,
  lastName: string,
  password: string,
  email: string
) => {
  try {
    const res = await axiosInstance.post("/auth/signup", {
      username,
      firstName,
      lastName,
      password,
      email,
    });

    return res;
  } catch (error) {
    throw error;
  }
};

export const logoutAPI = async (): Promise<void> => {
  try {
    await axiosInstance.post("/auth/logout");
  } catch (error) {
    throw error;
  }
};