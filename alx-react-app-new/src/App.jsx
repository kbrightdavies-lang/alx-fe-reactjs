import { useState } from 'react';
import './App.css';
import Header from "./src/components/Header.jsx";
import MainContent from "./src/components/MainContent.jsx";
import Footer from "./src/components/Footer.jsx";
import UserProfile from "./src/components/UserProfile.jsx";
import ProfilePage from './src/components/ProfilePage';
import UserContext from './src/components/UserContent';
import UserDetails from './src/components/UserDetails';




function App() {
  const [count, setCount] = useState({
  const :userData = { name: "Jane Doe", email: "jane.doe@example.com" },
  const :userData = useState({
    name: "Kelly",
    age: 19,
    bio: "Aspiring animator and writer",
  })
});  
  


  return (
    <>
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
      <Header />
      <UserProfile />
      <MainContent />
      <Footer />
      <Counter />
      <UserProfile />
      <UserDetails />
      <UserInfo />
      <UserDetails />
    </>
  );
}

export default App
