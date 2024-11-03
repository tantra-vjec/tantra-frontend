import { React, useState, useEffect } from "react";
import Cards from "../../components/cards/Cards";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Poster from "../../components/poster/Poster";
import MusicBand from "../../components/musicBand/Musicband";
import Loader from "../../components/Loader/Loader";
import logo from "../../assets/logo/tantra.gif";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-black text-[white] font-[Quicksand] home">
          <Navbar />
          <section id="home">
            {/* <img src={logo} /> */}
            <Poster />
          </section>
          <section id="musicBand">
            <MusicBand />
          </section>
          <section id="events">
            <Cards />
          </section>
          <section id="footer">
            <Footer />
          </section>
        </div>
      )}
    </>
  );
}

export default Home;
