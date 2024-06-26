import Navbar from "@/app/components/Sidebar/Sidebar";
import WeaponCard from "@/app/components/Card/Card";
import Vandalism from "../components/Vandalism/Vandalism";

export default function page() {
  return (
    <div className="flex">
      <div className="left w-[24%]">
        <Navbar active={'vandalism'} />
      </div>
      <div className="right w-[76%] mt-8 grid grid-cols-3 gap-8 justify-center items-center">
        <Vandalism />
      </div>
    </div>
  );
}
