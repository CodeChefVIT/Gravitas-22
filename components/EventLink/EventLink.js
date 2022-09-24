import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
function EventLink({ hoverColor, title, link }) {
  const [hovering, setHovering] = useState(false);
  const router = useRouter();

  return (
    <div
      style={{ backgroundColor: hovering ? hoverColor : "" }}
      className={`font-mudclaw bg-[#FFFFF4] flex items-center justify-center flex-1 w-[25vw]  last-of-type:border-r-0 border-r-[1px] border-t-[1px] border-b-[1px] border-black transition-all cursor-pointer hover:text-white`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={() => router.push(link)}
    >
      <div className="-rotate-90 text-3xl whitespace-nowrap w-max h-fit">
        <Link href={link}>{title}</Link>
      </div>
    </div>
  );
}

export default EventLink;
