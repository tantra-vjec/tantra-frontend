import { React, useEffect } from "react";
import Cards from "../../components/cards/Cards";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Poster from "../../components/poster/Poster";
import CountDown from "../../components/countDown/CountDown";
import Marquee from "../../components/marquee/MarqueeComp";
import Description from "../../components/description/Description";
import MusicBand from "../../components/musicBand/Musicband";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="bg-black text-[white] font-[Quicksand] home">
      <Navbar />

      <section id="home">
        <Poster />
      </section>
      <section id="description">
        <Description />
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
  );
}

export default Home;
