import NavBar from "./Components/NavBar";
import "./App.css";
// import Props from "./Components/Props";
import Card from "./Components/Card";
import Movies from "./Data/Movie";
import CompA from "./Components/CompA";
import { BrowserRouter, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contacts from "./Pages/Contact";
import MoviePage from "./Pages/Movies";
import { Route } from "react-router-dom";
import Blog from "./Pages/Blog";
import Form from "./Components/Form";
import SignupForm from "./Components/SignupForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Movies" element={<MoviePage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/register" element={<SignupForm />} />
          
        </Routes>
      </BrowserRouter>

      {/* <div className="app-container">
        <Card title="Sakamoto Days"  release="2018" director="Tony Stark" image="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx184237-OJAksU2fsIPx.jpg"/>
        <Card title="Dandadan" release="2025" director="Tony" image="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx185660-uB8RUMBGovGr.jpg"/>
        <Card title="Kiju NO8" release="2024" director="Monster" image="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx153288-25FBfFJzEQ5O.jpg" />
        <Card title="Dignity" release="2025" director="Luffy" image="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx181444-Ut9DDUZdfHwg.jpg" />
       <Card title="Dr. Stone" release="2025" director="Stone" image="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx131518-RU7RoUmGb2sP.jpg" />
       <Card title="One Piece" release="1999"  director="Oda" image="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21-ELSYx3yMPcKM.jpg" />
       <Card title="Demon Slayer" release="2016" director="Muzan" image="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx178788-0BVsKuCD6QtX.jpg" />
       <Card title="One Punch Man" release="2016" director="One" image="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx153800-8SpzdHOaZCoU.jpg" />
       <Card title="Jujutsu Kaisen" release="2020" director="Gege" image="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113415-LHBAeoZDIsnF.jpg" />
       <Card title="Spy X Family" release="2021" director="Loid" image="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx177937-HDZQqDqXQqxs.jpg" /> */}

      {/* {Movies.map((item, i) => {
          return (
            <Card
              title={item.title}
              release={item.release}
              director={item.director}
              image={item.image}
            />
          );
        })}

      </div> */}
    </>
  );
}

export default App;
