import React from "react";
import Image from "next/image";

// INTERNAL IMPORT
import Style from "./Loader.module.css";
import Images from "../../img";
const Loader = () => {
  return (
    <div className={Style.Loader}>
      <div className={Style.Loader_box}>
        <div className={Style.Loader_box_img}>
          <Image
            src={Images.loader}
            alt="loader"
            width={200}
            height={200}
            className={Style.Loader_box_img_img}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
