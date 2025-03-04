import React, { useState } from "react";
import ProductCategory from "../../components/product/ProductCategory";
import { Link } from "react-router-dom";

const Home = () => {
  const [title, setTitle] = useState([
    "SẢN PHẨM BÁN CHẠY",
    "SẢN PHẨM MỚI",
    "SẢN PHẨM KHUYẾN MÃI",
  ]);
  const [indexs, setIndexs] = useState(0);
  return (
    <>
      <div className="w-full mt-3 flex gap-2">
        <ul className="  w-[200px] h-auto  bg-[#FFFFFF] border border-slate-300">
          <li className="w-full h-[35px] pl-5 flex items-center gap-2 border-b-[1px] border-b-slate-300 text-sm text-[#000000] font-medium hover:bg-slate-200">
            <div className="w-[15px] text-center">
              <i className=" fa-solid fa-mobile-screen-button"></i>
            </div>
            <p>Điện thoại</p>
          </li>
          <li className="w-full h-[35px] pl-5 flex items-center gap-2 border-b-[1px] border-b-slate-300 text-sm text-[#000000] font-medium hover:bg-slate-200">
            <div className="w-[15px] text-center">
              <i className="fa-solid fa-laptop"></i>
            </div>
            <p>Máy tính</p>
          </li>
          <li className="w-full h-[35px] pl-5 flex items-center gap-2 border-b-[1px] border-b-slate-300 text-sm text-[#000000] font-medium hover:bg-slate-200">
            <div className="w-[15px] text-center">
              <i className="fa-solid fa-tablet-screen-button"></i>
            </div>
            <p>Máy tính bảng</p>
          </li>
          <li className="w-full h-[35px] pl-5 flex items-center gap-2 border-b-[1px] border-b-slate-300 text-sm text-[#000000] font-medium hover:bg-slate-200">
            <div className="w-[15px] text-center">
              <i className="fa-solid fa-computer"></i>
            </div>
            <p>Máy tính bàn</p>
          </li>
          <li className="w-full h-[35px] pl-5 flex items-center gap-2 border-b-[1px] border-b-slate-300 text-sm text-[#000000] font-medium hover:bg-slate-200">
            <div className="w-[15px] text-center">
              <img
                className="w-5 h-4"
                src="https://cellphones.com.vn/media/icons/menu/icon-cps-610.svg"
              ></img>
            </div>
            <p>Đồng hồ</p>
          </li>
        </ul>
        <div className="banner w-[700px] h-[300px] ">
          <img className="w-full h-full object-cover" src="/banner.jpg"></img>
        </div>
        <div className=" h-[300px] flex flex-col gap-1">
          <img className=" h-[33%] object-cover" src="/bn1.jpg" />
          <img className=" h-[32%] object-cover" src="/bn2.jpg" />
          <img className=" h-[32%] object-cover" src="/bn3.jpg" />
        </div>
      </div>
      {/* SẢN PHẨM BÁN CHẠY */}
      <div className="w-full mt-3">
        <div className="w-full flex items-center gap-2 border-b border-b-red-700">
          {title.map((item, index) => (
            <button
              onClick={() => setIndexs(index)}
              key={index}
              className={
                index === indexs
                  ? "p-2 text-sm font-medium bg-red-500 rounded text-[#FFFFFF]"
                  : "p-2 text-sm font-medium text-slate-500"
              }
            >
              {item}
            </button>
          ))}
        </div>
        <div className="w-full mt-2 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-1">
          <Link to="/product">
            <div className="relative w-full  px-[10px] flex flex-col border border-slate-700 ">
              <div className="absolute top-[3%] right-[4%] w-12 h-12 rounded-full bg-red-500 flex justify-center items-center text-[#FFFFFF] font-bold ">
                -6%
              </div>
              <div className="w-full h-[60%] p-4 flex justify-center">
                <img className="w-full h-full object-cover" src="/mtinh.jpg" />
              </div>
              <div className="price w-full h-[30px] text-2xl text-red-700 font-bold mt-1">
                <span>25.000.000</span>
                <span className="text-base ml-[1px]">đ</span>
              </div>
              <div className="name_product mt-1 w-full h-12 text-[16.5px]">
                ASUS ProArt StudioBook Pro 17 W700G1T-AV046T Laptop
              </div>
              <div className="original_price mt-3 text-sm line-through text-slate-400 font-medium">
                <span>26.500.000</span>
                <span className="text-base ml-[1px]">đ</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* MOBILE*/}
      <ProductCategory title="ĐIỆN THOẠI" />
      {/* LAPTOP */}
      <ProductCategory title="MÁY TÍNH XÁCH TAY" />
      {/* MÁY TÍNH ĐỂ BÀN */}
      <ProductCategory title="MÁY TÍNH ĐỂ BÀN" />
      {/* LAPTOP GAME & ĐỒ HOẠ */}
      <ProductCategory title="MÁY TÍNH BẢNG" />
    </>
  );
};

export default Home;
