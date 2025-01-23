// Context to wrap App in socket in order to send messages instantly
import React, { createContext, useState, useEffect, useContext } from "react";
import { io, Socket } from "socket.io-client";
import { useUserContext } from "./UserContext";

interface SocketContextType {
  socket: Socket | null;
  onlineUsers: string[];
  isUserOnline: (userId: string) => boolean;
}

const SocketContext = createContext<SocketContextType>({} as SocketContextType);

export const useSocketContext = (): SocketContextType => {
  return useContext(SocketContext);
};

interface SocketContextProviderProps {
  children: React.ReactNode;
}

export const SocketContextProvider: React.FC<SocketContextProviderProps> = ({ children }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const { user } = useUserContext();

  useEffect(() => {
    if (user) {
      const socket = io("http://localhost:5000", {
        query: {
          userId: user._id,
        },
      });

      setSocket(socket);

      // Listen for online users
      socket.on("getOnlineUsers", (users: string[]) => {
        setOnlineUsers(users);
      });

      // Cleanup function
      return () => {
        socket.close();
      }
    } else if (socket) {
      socket.close();
      setSocket(null);
    }
  }, [user]);

  const isUserOnline = (userId: string): boolean => {
    return onlineUsers.includes(userId);
  };

  return (
    <SocketContext.Provider value={{ socket, onlineUsers, isUserOnline }}>
      {children}
    </SocketContext.Provider>
  );
};
