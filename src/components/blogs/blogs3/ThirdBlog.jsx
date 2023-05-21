import React from "react";
import Hero from "../../Hero";
import manggisImg from "../../../assets/manggis.jpg";

const ThirdBlog = () => {
  const titleBlogs = "Buah Manggis";
  return (
    <div>
      <Hero titleBlogs={titleBlogs} />
      <div className="wrapper flex justify-center items-center p-5 px-10 mt-10 gap-16">
        <img
          src={manggisImg}
          alt="jeruk image"
          className="image-head w-1/3 rounded-xl shadow-lg"
        />
        <div className="content flex gap-3 flex-col justify-center items-start">
          <div className="title-blog text-2xl font-bold">{titleBlogs}</div>
          <div className="body-blog text-xl">
            Buah manggis atau Garcinia mangostana merupakan buah yang banyak
            ditemukan di daerah tropis, termasuk Indonesia. Buah ini masih satu
            keluarga dengan buah kecapi. Keduanya cukup diminati oleh banyak
            orang karena rasanya yang nikmat dan segar. Tak hanya lezat dan
            menyegarkan, buah manggis juga kaya akan nutrisi, seperti vitamin
            B2, vitamin C, serat, folat, magnesium, kalsium, dan xanthones yang
            diduga berperan sebagai senyawa antioksidan serta antiradang.
            Beberapa manfaat buah manggis seperti menurunkan berat badan,
            meningkatkan daya tahan tubuh, mengontrol kadar gula darah, dan
            meredakan radang sendi.
          </div>
          <div className="author-blog text-sm">
            <i>Haga Junisa</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdBlog;
