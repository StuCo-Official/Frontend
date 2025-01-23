export interface Post {
    _id: string;
    text: string;
    img?: string; // Optional image field
    user: User; // The user who created the post
    likes: string[]; // Array of user IDs who liked the post
    comments: Comment[]; // Array of comments
    createdAt?: string; // Optional timestamp for when the post was created
    updatedAt?: string; // Optional timestamp for when the post was last updated
}

// Define the interface for a User
export interface User {
    _id: string;
    username: string;
}
  
  // Define the interface for a Comment
export interface Comment {
    user: User;
    text: string;
}