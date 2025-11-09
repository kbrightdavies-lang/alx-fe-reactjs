import { useState } from 'react';
import './App.css';
import Header from "./src/components/Header.jsx";
import MainContent from "./src/components/MainContent.jsx";
import Footer from "./src/components/Footer.jsx";
import UserProfile from "./src/components/UserProfile.jsx";




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <UserProfile name="Kelly" age={19} bio="Aspiring coder" />
      <MainContent />
      <Footer />
    </>
  )
}

export default App
