import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-3 text-center">
      <div className="text-[9.5vw] flex items-center justify-center uppercase leading-[8.5vw]">
        L'étincelle
      </div>
      <div className="text-[9.5vw] flex items-center justify-center uppercase leading-[8.8vw]">
        qui
        <div className="w-[1.66em] h-[0.73em] -mt-[0.125em] rounded-full overflow-hidden">
          <Video />
        </div>
        génère
      </div>
      <div className="text-[9.5vw] flex items-center justify-center uppercase leading-[7.5vw]">
        la créativité
      </div>
    </div>
  );
};

export default HomeHeroText;
