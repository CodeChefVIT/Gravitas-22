import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="fixed z-10 bg-white top-0 left-0 w-[100vw] h-[12vh] border-b-2 border-black flex items-center">
      <div className="border-black border-r-2 h-full items-center justify-center aspect-square hidden sm:flex">
        <Link href={"/"}>
          <Image src={"/codechef_logo.png"} alt="" width={80} height={80} />
        </Link>
      </div>

      <div className="h-full font-mudclaw flex-1 flex items-center justify-evenly text-sm md:text-lg">
        <Link href={"#banner"}>Home</Link>
        <Link href={"#events"}>Events</Link>
        <Link href={"#events"}>Sponsors</Link>

        <Link href={"#"}>Contact</Link>
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
