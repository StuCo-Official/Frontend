import { Routes, Route } from 'react-router-dom';

import LoginPage from './pages/auth/LoginPage';
import SignUpPage from './pages/auth/SignupPage';

import { Toaster } from 'react-hot-toast';
import ProfilePage from './pages/home/ProfilePage';
import MainPageAfterLogin from './pages/home/HomePageAfterLogin';
import HomePage from './pages/home/HomePageBeforeLogin';
import ProfileSetUpPage from './pages/auth/EditProfilePage';
import MessagesPage from './pages/home/MessagesPage';

const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <Routes>
        <Route path= '/' element={<HomePage />}/>
				<Route path='/login' element={<LoginPage />} />
				<Route path='/signup' element={<SignUpPage/>} />
        <Route path="/edit-profile" element={<ProfileSetUpPage />} />
        <Route path="/home" element={<MainPageAfterLogin />} />
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/chats" element={<MessagesPage/>}/>
			</Routes>
      <Toaster/>
    </div>
  );
};

export default App;