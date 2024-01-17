import Navbar from "@/app/components/Sidebar/Sidebar";
import Weapons from "@/app/components/Weapons/Weapons";

export default function page() {
  return (
    <div className="flex">
      <div className="left w-[24%]">
        <Navbar active={'weapon'} />
      </div>
      <div className="right w-[76%] mt-8 grid grid-cols-3 gap-8 justify-center items-center">
        <Weapons />
      </div>
    </div>
  );
}
