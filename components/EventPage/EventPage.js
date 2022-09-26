import Navbar from "../Navbar/Navbar";
import Image from "next/image";
import { useRouter } from "next/router";
import EventPageNav from "./EventPageNav";
import pages_config from "../../pages_config.json";
import Head from "next/head";
function EventPage({ event_key }) {
  const router = useRouter();
  const event = pages_config[event_key];
  return (
    <>
      <Head>
        <title>{event.title}</title>
        <link rel="icon" href="codechef_logo.svg" />
      </Head>
      <Navbar focus={""} changeFocus={() => {}} />
      <div className="bg-[#E7E7E7] w-[100vw] h-[88vh] absolute bottom-0 flex items-center ">
        <div className=" flex-1  flex-col justify-center items-center hidden md:flex">
          <h1 className="font-mudclaw text-3xl w-[300px] mb-2">Our Events</h1>
          <div className="w-[400px] h-[400px] bg-slate-300 shadowed">
            <div className="w-full h-[50px]  bg-black flex items-center justify-between ">
              <div className="flex relative w-[60px]">
                <div
                  className="w-[10px] aspect-square
              rounded-full bg-green-500 absolute top-[50%] translate-y-[-50%] left-[10px]"
                ></div>
                <div
                  className="w-[10px] aspect-square
              rounded-full bg-yellow-500 absolute top-[50%] translate-y-[-50%] left-[26px]"
                ></div>
                <div
                  className="w-[10px] aspect-square
              rounded-full bg-red-500 absolute top-[50%] translate-y-[-50%] left-[42px]"
                ></div>
              </div>
              <div className="flex-1">
                <h2 className="text-white font-plex text-lg text-center">
                  GRAVITAS &rsquo;22
                </h2>
              </div>
              <div className=" w-[40px]">
                <Image src={"/avatar.svg"} alt="" width={20} height={20} />
              </div>
            </div>
            <div className="border-black border-[5px] h-[350px]">
              <EventPageNav selected={event_key} />
            </div>
          </div>
        </div>
        <div className="w-[90%] ml-5 flex flex-col  justify-center items-center md:items-start md:w-[50%]">
          <div className="flex flex-col">
            <h1 className="text-xl md:text-3xl lg:text-5xl mx-5 my-5 font-mudclaw">
              {event.title.toUpperCase()}
            </h1>
            <div className="md:w-fit overflow-y-scroll px-5">
              <p className="font-plex text-justify text-sm md:text-lg uppercase max-w-[100%] md:max-w-[700px]   max-h-[50vh] ">
                {event.text}
              </p>
            </div>
            <div className="flex items-center justify-center self-center w-fit my-5 mx-5 relative">
              <div className="absolute  translate-x-[-100%] w-[160px] h-[120px] -mr-[60px] z-10">
                <Image src={"/squigly_arrow.svg"} alt="" layout="fill" />
              </div>
              <button
                onClick={() => {
                  router.push(event.link || "/");
                }}
                style={{ backgroundColor: event.accent }}
                className={
                  " font-mudclaw text-white self-center  w-[180px] h-[50px] text-sm md:text-base lg:text-lg  shadowed_sm hover:shadowed aspect-auto hover:w-[200px] rounded-md border-2 border-black transition-all"
                }
              >
                Visit Website
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventPage;
