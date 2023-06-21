import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import {
  Bookmarks,
  Explore,
  Home,
  LikedPost,
  Profile,
  LandingPage,
  NotFound,
} from "./pages/index";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/likedPost" element={<LikedPost />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
