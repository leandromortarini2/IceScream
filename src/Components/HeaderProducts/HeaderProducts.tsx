import React, { useState } from "react";
import { HeaderProductsMobile } from "../HeaderProductsMobile/HeaderProductsMobile";
import { FaIceCream } from "react-icons/fa";
import { LuPopcorn } from "react-icons/lu";
import { PiPackageDuotone } from "react-icons/pi";
import { LuDessert } from "react-icons/lu";
import { TbMilkshake } from "react-icons/tb";
import { GiDinosaurEgg } from "react-icons/gi";

export const HeaderProducts: React.FC = () => {
  const [activePosition, setActivePosition] = useState<string>("iceCream");

  const icons = [
    { component: FaIceCream, position: "iceCream" },
    { component: TbMilkshake, position: "milkshake" },
    { component: GiDinosaurEgg, position: "waffle" },
    { component: LuDessert, position: "dessert" },
    { component: PiPackageDuotone, position: "packaged" },
    { component: LuPopcorn, position: "popcorn" },
  ];

  return (
    <div className="w-full min-h-screen bg-[#f4f3ec]">
      {/* Cabecera products */}
      <div className="hidden w-full h-40 md:flex justify-evenly items-center">
        {icons.map(({ component: Icon, position }) => (
          <div
            key={position}
            className={`w-1/6 md:h-32 lg:h-36 border-4 ${
              activePosition === position ? "bg-Secundario" : "bg-white"
            } border-white flex justify-center items-center`}
            onClick={() => setActivePosition(position)}
          >
            <Icon
              className={`lg:text-3xl xl:text-5xl ${
                activePosition === position ? "text-Primario" : "text-Primario"
              }`}
            />
          </div>
        ))}
      </div>

      <HeaderProductsMobile />

      {/* Container de productos */}
      <div className="w-full min md:h-32 lg:h-[510px] bg-white"></div>
    </div>
  );
};
