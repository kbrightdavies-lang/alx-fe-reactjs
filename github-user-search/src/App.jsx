import { useState } from 'react'
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';


function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>GitHub User Search</h1>
      <SearchBar />
    </div>
  );
}

export default App;

 