export type UserProfileToken = UserProfile & {
    token: string;
  };  

export type UserProfile = {
  _id: string;  
  username: string; 
  email: string;
  firstName: string;
  lastName: string;
  // Optional fields
  profileImage?: string; 
  coverImage?: string; 
  bio?: string; 
  link?: string; 
  dob?: string;
  country?: string;
  educationLevel?: string;
  academicYear?: string;
  major?: string;
  gpa?: string;
  role?: string;
  // IDs
  followers?: string[];
  following?: string[];
  likedPosts?: string[];
  };
  