interface catItemProps {
  setShowProfile: Function;
  catItem: any;
}
const CatItem = ({ setShowProfile, catItem }: catItemProps) => {
  console.log("url", catItem.image.url);
  return <div></div>;
};

export default CatItem;

//Todo add in cat item breed:
//     temperament: string;
//     origin: string;
//     life_span:string
//  adaptability:number;
//  affection-level:number;
//  child-friendly:number;
//  grooming:number;
// intelligence:number;
//  health_issues:number;
//  social_needs:number;
//  stranger_friendly:number;
//   name: string;
