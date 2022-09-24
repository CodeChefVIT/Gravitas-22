import Image from "next/image";
import Banner from "../components/Banner/Banner";
import EventCard from "../components/EventCard/EventCard";
import EventLink from "../components/EventLink/EventLink";
import SocialLink from "../components/SocialLink/SocialLink";
import Navbar from "../components/Navbar/Navbar";
import pages_config from "../pages_config.json";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const homeRef = useRef(null);
  const eventsRef = useRef(null);
  const sponsorsRef = useRef(null);
  const footerRef = useRef(null);
  const [inFocus, setInFocus] = useState("banner");
  const router = useRouter();
  useEffect(() => {
    console.log(router.asPath.split("/#")[1]);
    if (router.asPath.indexOf("/#") === -1) {
      setInFocus("banner");
    } else {
      setInFocus(router.asPath.split("/#")[1]);
    }
  }, [router.asPath]);

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
      <Navbar
        focus={inFocus}
        changeFocus={useCallback(
          (val) => {
            setInFocus(val);
          },
          [setInFocus]
        )}
      />
      <div className="home_page">
        <section id="banner" ref={homeRef}>
          <Banner
            focusEvents={useCallback(() => setInFocus("events"), [setInFocus])}
          />
        </section>
        <section id="events" ref={eventsRef}>
          <div className="w-[90vw] m-auto flex items-center justify-between my-6 md:my-10">
            <EventCard bgColor={"#F8A1A1"} image="/chef_hat.svg" />
            <EventCard bgColor={"#F7DD9B"} image="/mic.svg" />
            <EventCard bgColor={"#85BFEA"} image="/robotic_arm.svg" />
            <EventCard bgColor={"#BBF6A7"} image="/blocks.svg" />
          </div>
          <div className="flex h-[58vh] my-2">
            <EventLink
              title="COOK OFF"
              hoverColor={pages_config["cookoff"].accent}
              link={"cookoff"}
            />
            <EventLink
              title="TECH TALKS"
              hoverColor={pages_config["techtalks"].accent}
              link={"techtalks"}
            />
            <EventLink
              title="INDUSTREALITY"
              hoverColor={pages_config["industreality"].accent}
              link={"industreality"}
            />
            <EventLink
              title="HASHTECH"
              hoverColor={pages_config["hashtech"].accent}
              link={"hashtech"}
            />
          </div>
        </section>
        <section id="sponsors" ref={sponsorsRef}>
          <h1 className="text-3xl font-mudclaw text-[#FDC62E] text-center">
            Our Sponsors
          </h1>
          <div className="h-[70vh] flex items-center justify-center">
            <p className="text-xl md:text-3xl font-mudclaw">
              To Be Announced ...
            </p>
          </div>
        </section>
        <footer
          className=" text-sm lg:text-base font-mabry h-fit bg-[#B7DCEF]"
          id="footer"
          ref={footerRef}
        >
          <div className=" absolute w-[100px] translate-y-[-50%] left-[10vw] aspect-square">
            <Image src="/codechef_logo.svg" alt="" layout="fill" />
          </div>
          <div className="m-auto max-w-[1900px] w-fit h-full flex flex-col justify-end">
            <div className=" w-[90%] mx-auto flex flex-col items-center justify-center md:flex-row border-b-[1px] border-black">
              <p className="mb-5 mt-20 w-[100%] whitespace-normal  flex-1 text-justify">
                CodeChef-VIT is a prominent technical chapter at VIT Vellore
                with a goal to provide students with a platform for programmers
                and developers everywhere to learn and grow alongside one
                another. We also promote the all-round development of students
                through regular events such as workshops, projects showcases and
                other interactive sessions that can help them perceive
                real-world problems.
              </p>
              <div className=" flex-[0.3] mt-12 mx-10 mb-5 grid  items-center grid-cols-3 lg:flex">
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
