import { useEffect, useState } from "react";

interface catItemImagesProps {
  catItem: any;
}

const CatItemImages = ({ catItem }: catItemImagesProps) => {
  const [itemImagesDetails, setItemImagesDetails] = useState<{ url: string }[]>(
    []
  );
  useEffect(() => {
    fetch(`http://localhost:3001/api/post/${catItem.id}`)
      .then((response) => response.json())
      .then((imagesDetails) => {
        console.log("images of given cat item", imagesDetails.data);
        setItemImagesDetails(imagesDetails.data);
      })
      .catch((error) => {
        console.log("couldnot fetch given id images", error);
      });
  }, [catItem]);

  return (
    <div className="flex flex-wrap  flex-row md:pl-12 md:pr-12 mt-7 ">
      {itemImagesDetails.map((itemImages) => {
        return (
          <img
            className="mb-8 md:w-2/6 object-cover md:mr-5 md:pb-7  rounded-3xl flex-1"
            src={itemImages.url}
            alt="cat item"
          />
        );
      })}
    </div>
  );
};

export default CatItemImages;
