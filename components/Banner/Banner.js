import Image from "next/image";
import Link from "next/link";
import GroupPic from "../GroupPic/GroupPic";
function Banner({ focusEvents }) {
  return (
    <div className="flex h-[87vh] mt-[12vh]  ">
      <div className="flex-1 relative flex items-center justify-center flex-col">
        <div className="absolute bottom-[10%] left-0 w-[100px] h-[100px]">
          <Image src={"/vector1.svg"} alt="" layout="fill" />
        </div>
        <div className="absolute top-[10%] right-0 w-[100px] h-[70px]">
          <Image src={"/vector2.svg"} alt="" layout="fill" />
        </div>
        <div className="absolute top-[50%] left-[30%] translate-x-[-50%] translate-y-[-50%] w-[400px] h-[150px] -z-10">
          <Image src={"/ellipse.svg"} alt="" layout="fill" />
        </div>

        <div className="text-5xl sm:text-6xl md:text-[90px] font-grotesk font-extrabold mb-5">
          <h1 className="stroked-grey ">GRAVITAS</h1>
          <h1 className="stroked">GRAVITAS</h1>
          <h1 className="">GRAVITAS</h1>
        </div>
        <button
          className="bg-blacks absolute bottom-[15%]"
          onClick={() => {
            focusEvents();
            location.href = "#events";
          }}
        >
          <div className="font-mudclaw p-[20px] bg-[#FDFF7C] border-[2px] border-black rounded-full shadowed flex items-center justify-center text-sm sm:text-md md:text-lg">
            <p className="mx-2">Explore Events</p>
            <span className="relative mx-2 h-[15px] w-[15px]">
              <Image src="/arrows.svg" alt="" layout="fill" />
            </span>
          </div>
        </button>
      </div>
      <div className="flex-[0.8] lg:flex items-center justify-center max-w-[800px] hidden lg:block bg-[#B7DCEF] border-l-2 border-b-2 border-black">
        <GroupPic />
      </div>
    </div>
  );
}

export default Banner;
