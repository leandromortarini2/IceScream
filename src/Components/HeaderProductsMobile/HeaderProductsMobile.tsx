import { FaIceCream } from "react-icons/fa";
import { LuPopcorn } from "react-icons/lu";
import { PiPackageDuotone } from "react-icons/pi";
import { LuDessert } from "react-icons/lu";
import { TbMilkshake } from "react-icons/tb";
import { GiDinosaurEgg } from "react-icons/gi";
import { useState } from "react";

export const HeaderProductsMobile = () => {
  const [activePosition, setActivePosition] = useState<string>("");

  function handlePosition(position: string) {
    setActivePosition(position);
  }

  const icons = [
    { component: FaIceCream, position: "iceCream" },
    { component: TbMilkshake, position: "milkshake" },
    { component: GiDinosaurEgg, position: "waffle" },
    { component: LuDessert, position: "dessert" },
    { component: PiPackageDuotone, position: "packaged" },
    { component: LuPopcorn, position: "popcorn" },
  ];

  return (
    <>
      {/* CELULAR */}
      <div className="w-full bg-gray-800 flex justify-evenly items-center md:hidden">
        {icons.map(({ component: Icon, position }) => (
          <div
            key={position}
            className={`w-1/6 h-14 ${
              activePosition === position ? "bg-Primario" : "bg-white"
            } border-4 border-white flex justify-center items-center`}
          >
            <button onClick={() => handlePosition(position)}>
              <Icon
                className={`text-3xl ${
                  activePosition === position ? "text-white" : "text-Primario"
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
