import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Navbar({ focus, changeFocus }) {
  return (
    <div className="fixed z-10 bg-white top-0 left-0 w-[100vw] h-[12vh] border-b-2 border-black flex items-center">
      <div className="border-black border-r-2 h-full items-center justify-center aspect-square hidden sm:flex">
        <Link href={"/"}>
          <Image src={"/codechef_logo.png"} alt="" width={80} height={80} />
        </Link>
      </div>

      <div className="h-full font-mudclaw flex-1 flex items-center justify-evenly text-xs sm:text-sm md:text-lg">
        <div
          style={{
            border: focus === "banner" && "1px solid orange",
            padding: focus === "banner" ? "10px" : "0",
          }}
          className="rounded-[50%] transition-all"
          onClick={() => changeFocus("banner")}
        >
          <Link href={"/#banner"}>HOME</Link>
        </div>
        <div
          style={{
            border: focus === "events" && "1px solid orange",
            padding: focus === "events" ? "10px" : "0",
          }}
          className="rounded-[50%] transition-all"
          onClick={() => changeFocus("events")}
        >
          <Link href={"/#events"}>EVENTS</Link>
        </div>
        <div
          style={{
            border: focus === "sponsors" && "1px solid orange",
            padding: focus === "sponsors" ? "10px" : "0",
          }}
          className="rounded-[50%] transition-all"
          onClick={() => changeFocus("sponsors")}
        >
          <Link href={"/#sponsors"}>SPONSORS</Link>
        </div>

        <div
          style={{
            border: focus === "footer" && "1px solid orange",
            padding: focus === "footer" ? "10px" : "0",
          }}
          className="rounded-[50%] transition-all"
          onClick={() => changeFocus("footer")}
        >
          <Link href={"/#footer"}>CONTACT</Link>
        </div>
      </div>
      <div className="h-[70%] w-[15vw] hidden md:flex items-center justify-center relative mr-5">
        <Image
          src={"/gravitas_logo.svg"}
          alt=""
          width={200}
          height={200}
          layout="fill"
        />
      </div>
    </div>
  );
}
