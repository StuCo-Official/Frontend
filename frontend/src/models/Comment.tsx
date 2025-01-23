export interface Comment {
  _id: string;
  commenter: {
    _id: string;
    username: string;
    profilePicture?: string;
  } 
  text: string;
  timestamp: string;
}
