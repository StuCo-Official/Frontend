import DemoProfileImage from '../../assets/DemoProfileImage.png';

const getUser = () => {
    const dummyUsers = [
        { title: 'Alice', numUnread: 9, icon: DemoProfileImage, numUsers: 2 },
        { title: 'Matthew', numUnread: 0, numUsers: 2 },
        { title: 'Elle', numUnread: 0, numUsers: 2 },
        { title: 'Alice, Matthew, +', numUnread: 3, numUsers: 3 },
        { title: 'Harvard grp chat', numUnread: 0, numUsers: 5 },
    ];
    return dummyUsers;
}

export default getUser;
