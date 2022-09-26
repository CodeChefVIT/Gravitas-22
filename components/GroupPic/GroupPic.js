import Image from "next/image";
function GroupPic() {
  return (
    <div className="w-[70%] h-[17vw] max-h-[400px] relative">
      <div className="absolute w-full h-full">
        <Image src="/group_pic.jpeg" alt="" layout="fill" />
      </div>
      <div className="absolute translate-x-[-40%] translate-y-[-50%] w-[150px] h-[150px]">
        <Image src="/star.svg" alt="" layout="fill" />
      </div>
      <div className="absolute translate-x-[-40%]  w-[20%] h-[150px] bottom-[-60px] left-[60%]">
        <Image src="/smiley.svg" alt="" layout="fill" />
      </div>
    </div>
  );
}

export default GroupPic;
