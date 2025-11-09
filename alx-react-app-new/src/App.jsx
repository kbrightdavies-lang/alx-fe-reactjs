import { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";




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
