import React from "react";
import Hero from "../../Hero";
import orangeImg from "../../../assets/jeruk.jpg";

const FirstBlog = () => {
  const titleBlogs = "Buah Jeruk";
  return (
    <div>
      <Hero titleBlogs={titleBlogs} />
      <div className="wrapper flex justify-center items-center p-5 px-10 mt-10 gap-16">
        <img
          src={orangeImg}
          alt="jeruk image"
          className="image-head w-1/3 rounded-xl shadow-lg"
        />
        <div className="content flex gap-3 flex-col justify-center items-start">
          <div className="title-blog text-2xl font-bold">{titleBlogs}</div>
          <div className="body-blog text-xl">
            Jeruk adalah salah satu jenis buah yang mudah ditemukan di
            Indonesia. Ternyata ada sejumlah manfaat jeruk untuk kesehatan yang
            sebaiknya Anda ketahui. Kandungan buah jeruk yang paling terkenal
            adalah vitamin C. Hal ini membuat jeruk menjadi salah satu buah yang
            dipilih masyarakat Indonesia untuk melengkapi kebutuhan vitamin C.
            Dirangkum dari WebMD, setiap jenis jeruk mengandung lebih dari 100%
            jumlah vitamin C harian yang direkomendasikan untuk diasup oleh
            tubuh. Namun, selain itu, masih ada manfaat jeruk dan kandungan buah
            jeruk, seperti Anti Inflamasi, Menjaga usus tetap sehat, Memperkuat
            tulang dan otot, Sumber Antioksidan, dan Menurunkan tekanan darah.
          </div>
          <div className="author-blog text-sm">
            <i>Virdita Ratriani</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBlog;
