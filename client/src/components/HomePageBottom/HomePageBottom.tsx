import React from "react";

const HomePageBottom = () => {
  const handleReadMore = () => {};
  return (
    <div className="flex flex-col flex-wrap md:flex-row md:justify-between  mt-10 md:pl-12 md:pr-12 ">
      <div className="flex-1">
        <div className="bg-[#4D270C] w-10 h-[3px] mb-3"></div>
        <h3 className="text-3xl md:text-4xl font-bold text-currentColor mb-7">
          Why should you have a cat?
        </h3>
        <div>
          <p className="tex-lg font-medium text-currentColor mb-4">
            Having a cat around you can actually trigger the release of calming
            chemicals in your body which lower your stress and anxiety leves
          </p>
          <div onClick={handleReadMore} className="flex cursor-pointer">
            <p className="text-s font-bold text-readMoreColor inline-block mr-2">
              READ MORE
            </p>
            <p className="inline-block  pb-7">→</p>
          </div>
        </div>
      </div>
      <div className="flex-1 columns-2 max-w-[400px]">
        <div className="mb-3">
          <img
            src="assets/image1.png"
            alt=""
            className="w-[273px] h-[105px] aspect-video  object-cover rounded-lg"
          />
        </div>
        <div>
          <img
            src="assets/image2.png"
            alt=""
            className="w-[238px] h-[184px] aspect-video  object-cover rounded-lg"
          />
        </div>
        <div>
          <img
            src="assets/image3.png"
            alt=""
            className="w-[195px] h-[243px] aspect-video  object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePageBottom;
