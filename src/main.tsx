
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PostCard from './components/posts/PostCard.tsx';

const queryClient = new QueryClient();
const mockPost = {
  _id: '12345',
  user: {
    _id: '67890',
    username: 'MockUser',
    profilePicture: 'https://via.placeholder.com/150',
  },
  text: 'This is a mock post to test the PostCard component!',
  img: 'https://via.placeholder.com/600x400',
  likes: ['123', '456', '789'],
  comments: [
    {
      _id: '1',
      user: {
        _id: '23456',
        username: 'Commenter1',
        profilePicture: 'https://via.placeholder.com/150',
      },
      text: 'Nice post!',
      timestamp: new Date().toISOString(),
    },
    {
      _id: '2',
      user: {
        _id: '34567',
        username: 'Commenter2',
        profilePicture: 'https://via.placeholder.com/150',
      },
      text: 'I agree!',
      timestamp: new Date().toISOString(),
    },
  ],
  createdAt: new Date().toISOString(),
};

// Example mock current user data
const mockCurrentUser = {
  _id: '67890',
  username: 'MockUser',
  profilePicture: 'https://via.placeholder.com/150',
};

// Example token
const mockToken = 'mock-token';
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    {/* <PostCard post={mockPost} currentUser={mockCurrentUser} token={mockToken} /> */}
    <App/>
    </QueryClientProvider>
  </BrowserRouter>
);
