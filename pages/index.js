import Banner from "../components/Banner/Banner";
import EventCard from "../components/EventCard/EventCard";
import EventLink from "../components/EventLink/EventLink";
export default function Home() {
  return (
    <div className="home_page">
      <section id="banner">
        <Banner />
      </section>
      <section id="events">
        <div className="w-[90vw] m-auto flex items-center justify-between my-2">
          <EventCard bgColor={"#F8A1A1"} image="/chef_hat.svg" />
          <EventCard bgColor={"#F7DD9B"} image="/mic.svg" />
          <EventCard bgColor={"#85BFEA"} image="/robotic_arm.svg" />
          <EventCard bgColor={"#BBF6A7"} image="/blocks.svg" />
        </div>
        <div className="flex h-[58vh] my-2">
          <EventLink title="COOK OFF" hoverColor="#FF4C38" link={"cookoff"} />
          <EventLink
            title="TECH TALKS"
            hoverColor="#FDC62E"
            link={"techtalks"}
          />
          <EventLink
            title="INDUSTREALITY"
            hoverColor="#3860FF"
            link={"industreality"}
          />
          <EventLink title="HASHTECH" hoverColor="#2FAB5A" link={"hashtech"} />
        </div>
      </section>
    </div>
  );
}
