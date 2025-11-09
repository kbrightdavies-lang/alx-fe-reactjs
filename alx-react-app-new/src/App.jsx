import { useState } from 'react';
import './App.css';
import Header from "./src/components/Header.jsx";
import MainContent from "./src/components/MainContent.jsx";
import Footer from "./src/components/Footer.jsx";
import UserProfile from "./src/components/UserProfile.jsx";
import ProfilePage from './src/components/ProfilePage';




function App() {
  const [count, setCount] = useState(0)
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };


  return (
    <>
      <Header />
      <UserProfile name="Kelly" age={19} bio="Aspiring coder" />
      <MainContent />
      <Footer />
      <Counter />
      <ProfilePage userData={userData} />;
      <UserProfile />
      <UserDetails />
      <UserInfo />
    </>
  )
}

export default App
