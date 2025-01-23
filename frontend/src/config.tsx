import { useLocation } from 'react-router-dom';
import { Home, Send, User } from 'lucide-react';

export const NavItems = () => {
  const location = useLocation();

  function isNavItemActive(currentPath: string, nav: string) {
    return currentPath === nav;
  }

  const pathname = location.pathname;

  return [
    {
      name: 'Messages',
      href: '/chats',
      icon: <Send size={20} />,
      active: isNavItemActive(pathname, '/chats'),
      position: 'top',
    },
    {
      name: 'Home',
      href: '/home',
      icon: <Home size={20} />,
      active: isNavItemActive(pathname, '/home'),
      position: 'top',
    },
    {
      name: 'Profile',
      href: '/profile',
      icon: <User size={20} />,
      active: isNavItemActive(pathname, '/profile'),
      position: 'top',
    },
  ];
};
