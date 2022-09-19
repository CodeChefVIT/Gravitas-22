import EventPageNavLink from "./EventPageNavLink";
import pages_config from "../../pages_config.json";
function EventPageNav({ selected }) {
  return (
    <div className="flex flex-col w-[300px] mx-auto font-mudclaw py-3">
      <EventPageNavLink
        selected={selected === "cookoff"}
        align="flex-end"
        href={"/cookoff"}
        accent={pages_config["cookoff"].accent}
      >
        COOKOFF
      </EventPageNavLink>
      <EventPageNavLink
        selected={selected === "techtalks"}
        align="flex-start"
        href={"/techtalks"}
        accent={pages_config["techtalks"].accent}
      >
        TECH TALKS
      </EventPageNavLink>
      <EventPageNavLink
        selected={selected === "industreality"}
        align="flex-end"
        href={"/industreality"}
        accent={pages_config["industreality"].accent}
      >
        INDUSTREALITY
      </EventPageNavLink>
      <EventPageNavLink
        selected={selected === "hashtech"}
        align="flex-start"
        href={"/hashtech"}
        accent={pages_config["hashtech"].accent}
      >
        HASHTECH
      </EventPageNavLink>
    </div>
  );
}

export default EventPageNav;
