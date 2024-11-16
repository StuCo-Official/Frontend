import { createContext, useContext, useEffect, useState } from "react";
import { UserProfile } from "../models/UserProfile";
import { useNavigate } from "react-router-dom";
import { getUserProfileAPI, loginAPI, signupAPI, logoutAPI } from "../services/AuthService";
import toast from "react-hot-toast";
import { handleError } from "../helper/ErrorHandler";

type UserContextType = {
    // States
    user: UserProfile | null;
    // Methods
    registerUser: (firstName: string, lastName: string, username: string, email: string, password: string) => void;
    loginUser: (username: string, password: string) => void;
    logout: () => void;
    isLoggedIn: () => boolean;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const useAuthContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useAuthContext must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }: Props) => {
    const navigate = useNavigate();
    const [user, setUser]  = useState<UserProfile | null>(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
          try {
            const res = await getUserProfileAPI();
            if (res) {
              setUser(res);
            }
          } catch (error) {
            handleError(error);
          } finally {
            setIsReady(true);
          }
        };
        fetchUser();
      }, []);

    const registerUser = async (
        firstName: string,
        lastName: string,
        username: string,
        email: string,
        password: string
    ) => {
        try {
            const res = await signupAPI(username, firstName, lastName, password, email);
            if (res) {
                setUser(res);
                toast.success("Signup Success!");
                navigate("/");
            }
        } catch (error) {
            toast.error("Server error occurred during signup");
        }
    };

    const loginUser = async (username: string, password: string) => {
    try {
      const res = await loginAPI(username, password);
      if (res) {
        setUser(res);
        toast.success("Login Success!");
        navigate("/search");
      }
    } catch (error) {
      toast.error("Invalid email or password");
    }
  };

  const logout = async () => {
    try {
      await logoutAPI();
      setUser(null);
      navigate("/");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  const isLoggedIn = () => {
    return !!user;
  };
    
  return (
    <UserContext.Provider value={{ loginUser, user, logout, isLoggedIn, registerUser }}>
      {isReady ? children : null}
    </UserContext.Provider>
  );
};
