import { Routes, Route } from 'react-router-dom';

import LoginPage from './pages/auth/LoginPage';
import SignUpPage from './pages/auth/SignupPage';

import { Toaster } from 'react-hot-toast';
import ProfilePage from './pages/home/ProfilePage';
import MainPageAfterLogin from './pages/home/HomePageAfterLogin';
import HomePage from './pages/home/HomePageBeforeLogin';
import ProfileSetUpPage from './pages/auth/EditProfilePage';
import MessagesPage from './pages/home/MessagesPage';

import ProtectedRoute from './routes/ProtectedRoute';

const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Protected routes */}
        <Route
          path="/edit-profile"
          element={
            <ProtectedRoute>
              <ProfileSetUpPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <MainPageAfterLogin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chats"
          element={
            <ProtectedRoute>
              <MessagesPage />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Toaster />
    </div>
  );  
};

export default App;