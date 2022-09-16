import Banner from "../components/Banner/Banner";
import EventCard from "../components/EventCard/EventCard";
export default function Home() {
  return (
    <div className="home_page">
      <section id="banner">
        <Banner />
      </section>
      <section id="events">
        <div className="w-[100vw] flex items-center justify-evenly">
          <EventCard bgColor={"#F8A1A1"} image="/chef_hat.svg" />
          <EventCard bgColor={"#F7DD9B"} image="/mic.svg" />
          <EventCard bgColor={"#85BFEA"} image="/robotic_arm.svg" />
          <EventCard bgColor={"#BBF6A7"} />
        </div>
      </section>
    </div>
  );
}
