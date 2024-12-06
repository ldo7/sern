import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import DeleteProfile from './pages/DeleteProfile';
import EditProfile from './pages/EditProfile';
import Album from './pages/Album';
import Artist from './pages/Artist';
import Playlist from './pages/Playlist';
import Song from './pages/Song';
// import Search from './pages/Search';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/artist">Artists</Link>
            </li>
            <li>
              <Link to="/album">Albums</Link>
            </li>
            <li>
              <Link to="/song">Song</Link>
            </li>
            <li>
              <Link to="/playlists">Playlists</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/playlists" element={<Playlist />} />
          <Route path="/editprofile/:id" element={<EditProfile />} />
          <Route path="/deleteprofile/:id" element={<DeleteProfile />} />
          <Route path="/album" element={<Album />} />
          <Route path="/album/:id" element={<Album />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/artist/:id" element={<Artist />} />
          <Route path="/playlist/:userid/:playlistid" element={<Playlist />} />
          <Route path="/song/:id" element={<Song />} />
          {/* <Route path="/search" element={<Search />} /> */}
          {/* <Route path="/search/:name" element={<Search />} /> */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
