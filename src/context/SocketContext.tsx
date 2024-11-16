// Context to wrap App in socket in order to send messages instantly
import React, { createContext, useState, useEffect, useContext } from "react";
import { io, Socket } from "socket.io-client";
import { useAuthContext } from "./AuthContext";

interface SocketContextType {
  socket: Socket | null;
  onlineUsers: { userId: string; username: string }[]; // Adjust based on the actual structure
}

const SocketContext = createContext<SocketContextType | undefined>(undefined);

export const useSocketContext = (): SocketContextType => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("useSocketContext must be used within a SocketContextProvider");
  }
  return context;
};

interface SocketContextProviderProps {
  children: React.ReactNode;
}

export const SocketContextProvider: React.FC<SocketContextProviderProps> = ({ children }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<{ userId: string; username: string }[]>([]); // Adjust based on backend data
  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      const socketInstance = io("http://localhost:5000", {
        query: {
          userId: user._id,
        },
      });

      setSocket(socketInstance);

      // Listen for online users
      socketInstance.on("getOnlineUsers", (users: { userId: string; username: string }[]) => {
        setOnlineUsers(users);
      });

      // Cleanup function
      return () => {
        socketInstance.close(); // Properly close the socket connection
      };
    } else if (socket) {
      socket.close();
      setSocket(null);
    }
  }, [user]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
