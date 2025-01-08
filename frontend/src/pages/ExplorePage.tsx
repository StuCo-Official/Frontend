import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MyAppBar from '../components/layout/AppBar.tsx';
import SideBar from '../components/layout/SideBar.tsx';

// Define the User type 
interface User {
  username: string;
  firstName: string;
  lastName: string;
  profileImage: string;
  bio: string;
  major: string;
  country: string;
}

// Define the Filters type
interface Filters {
  locations: string[];
  majors: string[];
}

const ExplorePage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]); // Store users 
  const [filters, setFilters] = useState<Filters>({ locations: [], majors: [] }); // Store filter data
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({ location: '', major: '' });
  const [sortByMostRelevant, setSortByMostRelevant] = useState(false);
  const [showFiltersSidebar, setShowFiltersSidebar] = useState(false);
  const [selectedContentType, setSelectedContentType] = useState('people'); // people, posts, schools, articles

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await axios.get<User[]>('/api/users');
        console.log('Fetched users:', usersResponse.data);
        setUsers(usersResponse.data);
  
        // Default filters 
        const filtersResponse = await axios.get<Filters>('/api/filters').catch(() => ({
          data: { locations: ['USA', 'Canada'], majors: ['CS', 'Math'] },
        }));
        console.log('Fetched or Default filters:', filtersResponse.data);
        setFilters(filtersResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  const filteredUsers = users
  .filter((user) =>
    `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
  )
  .filter((user) => {
    const matchesLocation =
      selectedFilters.location === '' || user.country === selectedFilters.location;
    const matchesMajor =
      selectedFilters.major === '' || user.major === selectedFilters.major;
    return matchesLocation && matchesMajor;
  })
  .sort((a, b) => {
    if (sortByMostRelevant) {
      return `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`);
    }
    return 0;
  });

console.log('Filtered Users:', filteredUsers);


  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (filterType: 'location' | 'major', value: string) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const toggleSortByMostRelevant = () => {
    setSortByMostRelevant((prev) => !prev);
  };

  const toggleFiltersSidebar = () => {
    setShowFiltersSidebar((prev) => !prev);
  };

  const handleContentTypeChange = (type: string) => {
    setSelectedContentType(type);
  };

  return (
    <div className="main-page flex flex-col">
      {/* Top Navbar */}
      <section className="z-50 w-full fixed top-0 left-0 right-0">
        <MyAppBar />
      </section>

      {/* Main Layout */}
      <div className="flex w-screen h-full pt-[56px]">
        <div className="flex sticky top-[56px] left-0 h-[calc(100vh-56px)]">
          <SideBar />
        </div>
        <div className="flex-grow flex flex-col items-center px-6 py-4">
          {/* Search and Filter Buttons */}
          <div className="flex items-center mb-6 space-x-4 w-full">
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchQuery}
              onChange={handleSearch}
            />
            <button
              className={`px-4 py-2 rounded-lg ${
                sortByMostRelevant
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
              onClick={toggleSortByMostRelevant}
            >
              Most Relevant
            </button>
            <button
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg"
              onClick={toggleFiltersSidebar}
            >
              All Filters
            </button>
          </div>

          {/* Filter by Content Type */}
          <div className="flex space-x-4 mb-6">
            {['People', 'Posts', 'Schools', 'Articles'].map((type) => (
              <button
                key={type}
                className={`px-4 py-2 rounded-lg ${
                  selectedContentType.toLowerCase() === type.toLowerCase()
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
                onClick={() => handleContentTypeChange(type.toLowerCase())}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredUsers.map((user, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
              >
                <img
                  src={user.profileImage}
                  alt={`${user.firstName} ${user.lastName}`}
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h2 className="text-lg font-medium text-gray-800">{`${user.firstName} ${user.lastName}`}</h2>
                <p className="text-sm text-gray-500 text-center">{user.country}</p>
                <p className="text-sm text-gray-500 text-center">{user.major}</p>
                <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                  Connect
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters Sidebar */}
      {showFiltersSidebar && (
        <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50">
          <div className="p-4">
            <h3 className="text-lg font-medium mb-4">All Filters</h3>
            <label className="block mb-4">
              Location
              <select
                className="w-full px-3 py-2 border rounded-lg"
                onChange={(e) => handleFilterChange('location', e.target.value)}
              >
                <option value="">All Locations</option>
                {filters.locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              Major
              <select
                className="w-full px-3 py-2 border rounded-lg"
                onChange={(e) => handleFilterChange('major', e.target.value)}
              >
                <option value="">All Majors</option>
                {filters.majors.map((major) => (
                  <option key={major} value={major}>
                    {major}
                  </option>
                ))}
              </select>
            </label>
            <button
              className="mt-6 bg-green-500 text-white px-4 py-2 rounded-lg w-full"
              onClick={toggleFiltersSidebar}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExplorePage;
