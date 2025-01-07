export interface Post {
    _id: string; // MongoDB ObjectId as a string
    uploader: {
        _id: string;
        username: string;
        profilePicture?: string;
    }
    text: string;
    img?: string;
    likes: string[];
    comments: Comment[];
    createdAt: string;
}
