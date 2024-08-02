import React from "react";
import Example from "../../Components/Exemple/Exemple";

export const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center  ">
      <div className="w-full h-72  md:mt-20 overflow-hidden flex items-center justify-center ">
        <img
          src="https://as1.ftcdn.net/v2/jpg/06/19/90/34/1000_F_619903434_ds6cUPRMLnq2Heo3NlbhbsvRKSES1YUF.jpg"
          alt=""
          className="w-full"
        />
      </div>
      <div className="w-full flex justify-evenly items-center ">
        <div className="w-1/2 ml-3 mr-3 h-32 md:h-52 lg:h-64 xl:min-h-72  overflow-hidden flex justify-center items-center">
          <Example />
        </div>
        <div className="w-1/2  mr-3 h-32 md:h-52 lg:h-64 xl:min-h-72  overflow-hidden flex justify-center items-center">
          <Example />
        </div>
      </div>
    </div>
  );
};
