import Image from "next/image";
import nextImage from "../../../public/next.svg";

const Album = () => {
  return (
    <div>
      <h1>Using Image Component</h1>
      <Image src={nextImage} alt="next logo" width={500} height={500}></Image>
    </div>
  );
};

export default Album;
