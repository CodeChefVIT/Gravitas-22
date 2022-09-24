import Image from "next/image";
function EventCard({ bgColor, image }) {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={`w-[20%] flex items-center justify-center aspect-square  border-2 border-black shadowed_sm hover:shadowed_lg hover:w-[22%] hover:m-[-1%] transition-all`}
    >
      <div className="w-[70%] h-[70%] relative">
        <Image src={image} alt="" layout="fill" />
      </div>
    </div>
  );
}

export default EventCard;
