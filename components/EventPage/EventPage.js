import Navbar from "../Navbar/Navbar";
import Image from "next/image";
function EventPage() {
  return (
    <>
      <Navbar focus={""} changeFocus={() => {}} />
      <div className="bg-slate-50 w-[100vw] h-[88vh] absolute bottom-0 flex">
        <div className=" bg-slate-100 flex-[0.4] flex flex-col justify-center items-center">
          <h1 className="font-mudclaw text-3xl w-[300px] mb-2">Our Events</h1>
          <div className="w-[300px] h-[300px] bg-slate-300 shadowed">
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
            <div className="border-black border-[5px] h-[250px]">
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventPage;
