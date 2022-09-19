import Link from "next/link";
function EventPageNavLink({ children, href, align, selected, accent }) {
  return (
    <div
      style={{
        alignSelf: align,
        backgroundColor: selected ? accent : "#e7e7e7",
        color: selected ? "white" : "black",
        
      }}
      className={
        "border-2  border-black w-[200px] h-[60px] text-center flex items-center justify-center rounded-xl my-2 shadowed_sm hover:shadowed hover:w-[210px] transition-all" +
        (selected ? " shadowed" : "")
      }
    >
      <Link href={href}>{children}</Link>
    </div>
  );
}

export default EventPageNavLink;
