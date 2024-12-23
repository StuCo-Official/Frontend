import { createContext, useContext, useState } from "react";
import { UserProfile } from "../models/UserProfile";

type UserContextType = {
    user: UserProfile | null;
    setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const useUserContext = (): UserContextType => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }: Props) => {
  const [user, setUser]  = useState<UserProfile | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
