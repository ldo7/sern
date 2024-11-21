import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Album from './pages/Album';
import Artist from './pages/Artist';
import Playlist from './pages/Playlist';
import PlaySong from './pages/PlaySong';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter, createBrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   Home
    // </div>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 