import Image from "next/image";
import Banner from "../components/Banner/Banner";
import EventCard from "../components/EventCard/EventCard";
import EventLink from "../components/EventLink/EventLink";
import SocialLink from "../components/SocialLink/SocialLink";
import Navbar from "../components/Navbar/Navbar";
import { useEffect, useRef, useState } from "react";
export default function Home() {
  const homeRef = useRef(null);
  const eventsRef = useRef(null);
  const sponsorsRef = useRef(null);
  const footerRef = useRef(null);
  const [inFocus, setInFocus] = useState("banner");

  useEffect(() => {
    if (location.href.indexOf("/#") === -1) {
      setInFocus("banner");
    } else {
      setInFocus(location.href.split("/#")[1]);
    }
  }, [location.href]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry && entry.isIntersecting) setInFocus(entry.target.id);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.7,
      }
    );

    if (homeRef.current) observer.observe(homeRef.current);
    if (eventsRef.current) observer.observe(eventsRef.current);
    if (sponsorsRef.current) observer.observe(sponsorsRef.current);
    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (homeRef.current) observer.unobserve(homeRef.current);
      if (eventsRef.current) observer.unobserve(eventsRef.current);
      if (sponsorsRef.current) observer.unobserve(sponsorsRef.current);
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, [homeRef, eventsRef, sponsorsRef, footerRef]);

  return (
    <>
      <Navbar focus={inFocus} />
      <div className="home_page">
        <section id="banner" ref={homeRef}>
          <Banner />
        </section>
        <section id="events" ref={eventsRef}>
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
            <EventLink
              title="HASHTECH"
              hoverColor="#2FAB5A"
              link={"hashtech"}
            />
          </div>
        </section>
        <section id="sponsors" ref={sponsorsRef}>
          <h1 className="text-3xl font-mudclaw text-[#FDC62E] text-center">
            Our Sponsors
          </h1>
          <div className="h-[70vh]"></div>
        </section>
        <footer
          className=" text-sm lg:text-base font-mabry h-fit bg-[#B7DCEF]"
          id="footer"
          ref={footerRef}
        >
          <div className=" absolute w-[100px] translate-y-[-50%] left-[10vw] aspect-square">
            <Image src="/codechef_logo.png" alt="" layout="fill" />
          </div>
          <div className="m-auto max-w-[1900px] w-fit h-full flex flex-col justify-end">
            <div className=" w-[90%] mx-auto flex flex-col items-center justify-center md:flex-row border-b-[1px] border-black">
              <p className="mx-[2%] mb-5 mt-20 max-w-[1000px] text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="mx-10 flex mb-5">
                <SocialLink icon={"/twitter.svg"} bgColor="#23BA69" />
                <SocialLink icon={"/github.svg"} bgColor="#8590F2" />
                <SocialLink icon={"/linkedin.svg"} bgColor="#F9E562" />
                <SocialLink icon={"/youtube.svg"} bgColor="#FFB443" />
                <SocialLink icon={"/instagram.svg"} bgColor="#FF5E5E" />
                <SocialLink icon={"/attention.svg"} bgColor="#4E84F6" />
              </div>
            </div>
            <p className="ml-[5%] my-4">
              © Copyright 2022 | All rights reserved
            </p>
            <p className="text-center">Made with 🧡 by CodeChef-VIT</p>
          </div>
        </footer>
      </div>
    </>
  );
}
