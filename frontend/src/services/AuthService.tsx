import { UserProfile } from "../models/UserProfile";
import { handleError } from "../helper/ErrorHandler";
import axios from "axios";

// Ensure cookies are included with every request
axios.defaults.withCredentials = true;

export const getUserProfileAPI = async () => {
  try {
    const res = await axios.get<UserProfile>("/api/auth/getme");
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

export const loginAPI = async (username: string, password: string) => {
  try {
    const res = await axios.post("/api/auth/login", {
      username,
      password,
    });
    return res.data.user;
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
    const res = await axios.post("/api/auth/signup", {
      username,
      firstName,
      lastName,
      password,
      email,
    });

    return res.data.user;
  } catch (error) {
    throw error;
  }
};

export const logoutAPI = async (): Promise<void> => {
  try {
    await axios.post("/api/auth/logout");
  } catch (error) {
    throw error;
  }
};