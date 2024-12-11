import { Message } from "./Message";

export interface Chat {
  _id: string; // MongoDB ObjectId as a string
  participants: {
    _id: string; 
    username: string; 
    firstName: string; 
    lastName: string; 
    email: string;
    profileImage: string;
  }[];
  messages: Message[];
  createdAt: string;
  updatedAt: string;
}