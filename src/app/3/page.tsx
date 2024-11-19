// icons
import { FaChevronRight } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
// mockup
import MobilePhone from "@/components/phone-mockup";

const menuData = [
  { name: "Personal Data", icon: <BsFillPeopleFill /> },
  { name: "Messages", icon: <FaEnvelope /> },
  { name: "Notifications", icon: <FaBell /> },
  { name: "Location", icon: <FaLocationDot /> },
  { name: "Community", icon: <FaPeopleGroup /> },
];

const optionsData = [
  { name: "FAQs", icon: <FaQuestion /> },
  { name: "Settings", icon: <FaGear /> },
];

export default function Page() {
  return (
    <>
      <MobilePhone className="px-6 pt-12">
        <section className="text-black">
          <div className="flex gap-4">
            <div className="w-12 border-gray-800 border-2 rounded-lg overflow-hidden">
              <img
                src="https://thispersondoesnotexist.com/"
                className="object-cover"
              ></img>
            </div>
            <div>
              <p className="font-bold">Donald Duck</p>
              <p className="tracking-wider">Astrologist</p>
            </div>
          </div>

          <div className="border-[1px] border-gray-800 white my-4"></div>

          {menuData.map((item) => {
            return (
              <div className="flex justify-between items-center py-2 cursor-pointer hover:underline">
                <div className="flex items-center gap-2">
                  {item.icon}
                  {item.name}
                </div>

                <FaChevronRight />
              </div>
            );
          })}

          <div className="border-[1px] border-gray-800 white my-4"></div>

          {optionsData.map((item) => {
            return (
              <div className="flex justify-between items-center py-2 cursor-pointer hover:underline">
                <div className="flex items-center gap-2">
                  {item.icon}
                  {item.name}
                </div>
                <FaChevronRight />
              </div>
            );
          })}
        </section>
      </MobilePhone>
    </>
  );
}
