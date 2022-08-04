import { useEffect, useState } from "react";
import catService from "../../services/CatService";

interface catItemImagesProps {
  catItem: any;
}

const CatItemImages = ({ catItem }: catItemImagesProps) => {
  const [itemImagesDetails, setItemImagesDetails] = useState<{ url: string }[]>(
    []
  );
  useEffect(() => {
    const itemImages = catService.getItemImages(catItem);
    itemImages.then((images: any) => {
      setItemImagesDetails(images.data);
    });
  }, [catItem]);

  return (
    <div className="md:pl-12 md:pr-12">
      <div>
        <h3 className="text-2xl font-semibold mt-4">Other Photos</h3>
      </div>
      <div className="flex flex-wrap  flex-row  mt-7 ">
        {itemImagesDetails.map((itemImages, index) => {
          return (
            <img
              className="mb-8 md:w-64 object-cover md:mr-5 md:pb-7  rounded-3xl flex-1"
              src={itemImages.url}
              alt="cat item"
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CatItemImages;
