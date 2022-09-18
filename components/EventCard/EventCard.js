import Image from "next/image";
function EventCard({ bgColor, image }) {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={`w-[20%] flex items-center justify-center aspect-square  border-2 border-black shadowed_sm hover:shadowed hover:w-[21%] hover:m-[-0.5%] transition-all`}
    >
      <div className="w-[80%] h-[80%] relative">
        <Image src={image} alt="" layout="fill" />
      </div>
    </div>
  );
}

export default EventCard;
