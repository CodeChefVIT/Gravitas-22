import Image from "next/image";
function SocialLink({ bgColor, icon }) {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="relative aspect-square w-[40px] border-2 border-black shadowed_sm rounded-sm my-[10px] mx-[20px] transition-all hover:shadowed hover:w-[44px] hover:mx-[18px] hover:my-[8px] cursor-pointer"
    >
      <Image src={icon} alt="" layout="fill" />
    </div>
  );
}

export default SocialLink;
