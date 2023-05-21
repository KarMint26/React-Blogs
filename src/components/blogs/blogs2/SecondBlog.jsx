import React from "react";
import Hero from "../../Hero";
import cocoImg from "../../../assets/kelapa.jpg";

const SecondBlog = () => {
  const titleBlogs = "Buah Kelapa";
  return (
    <div>
      <Hero titleBlogs={titleBlogs} />
      <div className="wrapper flex justify-center items-center p-5 px-10 mt-10 gap-16">
        <img
          src={cocoImg}
          alt="jeruk image"
          className="image-head w-1/3 rounded-xl shadow-lg"
        />
        <div className="content flex gap-3 flex-col justify-center items-start">
          <div className="title-blog text-2xl font-bold">{titleBlogs}</div>
          <div className="body-blog text-xl">
            Manfaat buah kelapa untuk kesehatan juga sangat beragam karena buah
            ini mengandung nutrisi penting yang dibutuhkan tubuh, seperti
            protein, serat, kalsium, fosfor, magnesium, kalium, zat besi, dan
            vitamin C. Manfaat Buah Kelapa untuk Kesehatan Seperti yang telah
            dibahas sebelumnya, manfaat buah kelapa untuk kesehatan tidak bisa
            dilepaskan dari kandungan nutrisi di dalamnya. Berikut ini adalah
            beberapa manfaat buah kelapa untuk kesehatan. Menghidrasi tubuh
            Minum air kelapa dapat menjaga tubuh tetap terhidrasi karena air
            kelapa mengandung elektrolit, seperti kalium, natrium, magnesium,
            dan kalsium, yang mampu menjaga keseimbangan cairan dan elektrolit
            dalam tubuh. Dengan begitu, tubuh terhidrasi dengan baik. Inilah
            mengapa konsumsi air kelapa disarankan, terutama saat Anda mengalami
            kondisi tertentu seperti diare. Dengan minum air kelapa, cairan
            tubuh yang hilang saat diare bisa tergantikan sehingga Anda
            terhindar dari dehidrasi.
          </div>
          <div className="author-blog text-sm">
            <i>Ratriksa Kurnia</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondBlog;
