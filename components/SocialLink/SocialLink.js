import Image from "next/image";
function SocialLink({ bgColor, icon }) {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="relative w-[40px] h-[40px] border-2 border-black shadowed_sm rounded-sm m-2"
    >
      <Image src={icon} alt="" layout="fill" />
    </div>
  );
}

export default SocialLink;
