export interface Message {
    _id: string; // MongoDB ObjectId as a string
    senderId: string;
    receiverId: string;
    message: string;
    createdAt: string;
    updatedAt: string;
}
