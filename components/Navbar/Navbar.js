import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-[100vw] h-[12vh] border-b-2 border-black flex">
      <div className="border-black border-r-2 h-full  flex items-center justify-center">
        <Image src={"/codechef_logo.png"} alt="" width={80} height={80} />
      </div>

      <div className="h-full font-mudclaw flex-1 flex items-center justify-evenly text-sm">
        <Link href={"#"}>Home</Link>
        <Link href={"#"}>Events</Link>

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
