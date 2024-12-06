import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/UserProfile';
import Album from './pages/Album';
import Artist from './pages/Artist';
import FriendList from './pages/FriendActivity';
import Playlist from './pages/Playlist';
import PlaySong from './pages/PlaySong';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/album" element={<Album />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/playsong" element={<PlaySong />} />
        <Route path="/friendList" element={<FriendList />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 