import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
function SocialLink({ bgColor, icon, link }) {
  const router = useRouter();
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="relative aspect-square w-[40px] border-2 border-black shadowed_sm rounded-sm my-[10px] mx-[20px] transition-all hover:shadowed hover:w-[44px] hover:mx-[18px] hover:my-[8px] cursor-pointer"
    >
      <Link href={link}>
        <a target={"_blank"} rel="noopener noreferrer">
          <Image src={icon} alt="" layout="fill" />
        </a>
      </Link>
    </div>
  );
}

export default SocialLink;
