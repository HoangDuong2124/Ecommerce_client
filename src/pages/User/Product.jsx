import React from "react";
import Comment from "../../components/product/Comment";
import Feature from "../../components/product/Feature";
const Product = () => {
  return (
    <div className="w-full h-auto mt-5">
      <div className="product_info w-full h-auto flex gap-4">
        <div className="product_image w-[55%]  flex flex-col gap-3">
          <div className="relative w-full h-[400px] border border-slate-300 rounded-md">
            <img
              className="w-full h-full object-cover rounded-md"
              src="/mtinh.jpg"
            />
            <div className="absolute top-[3%] right-[3%] w-14 h-14 z-10 rounded-full bg-red-500 flex justify-center items-center text-2xl text-[#FFFFFF] font-bold ">
              -6%
            </div>
          </div>
          <div className="flex gap-2">
            <div className="border border-slate-300 rounded-[3px]">
              <img className="rounded-[3px] " src="/mtinh.jpg" />
            </div>
            <div className="border border-slate-300 rounded-[3px]">
              <img className="rounded-[3px] opacity-45" src="/mtinh.jpg" />
            </div>
            <div className="border border-slate-300 rounded-[3px]">
              <img className="rounded-[3px] opacity-45" src="/mtinh.jpg" />
            </div>
            <div className="border border-slate-300 rounded-[3px]">
              <img className="rounded-[3px] opacity-45" src="/mtinh.jpg" />
            </div>
          </div>
        </div>
        <div className="product_detail w-[45%]">
          <div className="text-xl text-[#000000] font-semibold">
            ASUS ROG Zephyrus M GU502GU-AZ90T Gaming
          </div>
          <div className="mt-1 flex items-center gap-1">
            <div className="flex items-center gap-[2px]">
              <i className="text-yellow-500 fa-solid fa-star"></i>
              <i className="text-yellow-500 fa-solid fa-star"></i>
              <i className="text-yellow-500 fa-solid fa-star"></i>
              <i className="text-yellow-500 fa-solid fa-star"></i>
              <i className="text-yellow-500 fa-solid fa-star"></i>
            </div>
            <a href="">(1 đánh giá của khách hàng)</a>
          </div>
          <div>
            <span className="relative text-lg font-normal opacity-45 line-through">
              34.600.000{" "}
              <span className="absolute bottom-[3px] line-through">đ</span>
            </span>
            <span className="relative ml-5 text-2xl text-red-500 font-semibold">
              32.500.000 <span className="absolute bottom-[3px]">đ</span>
            </span>
          </div>
          <div className="w-full mt-3 grid grid-cols-3 gap-2">
            <button className="flex flex-col items-center justify-center border border-slate-300 rounded-md px-3 py-1">
              <h4 className="text-sm font-semibold">S25 Ultra 1TB</h4>
              <span
                className="relative  text-sm
                 text-red-500 font-semibold"
              >
                32.500.000 đ
              </span>
            </button>
            <button className="flex flex-col items-center justify-center border border-slate-300 rounded-md px-3 py-1">
              <h4 className="text-sm font-semibold">S25 Ultra 1TB</h4>
              <span
                className="relative  text-sm
                 text-red-500 font-semibold"
              >
                32.500.000 đ
              </span>
            </button>
            <button className="flex flex-col items-center justify-center border border-slate-300 rounded-md px-3 py-1">
              <h4 className="text-sm font-semibold">S25 Ultra 1TB</h4>
              <span
                className="relative  text-sm
                 text-red-500 font-semibold"
              >
                32.500.000 đ
              </span>
            </button>
            <button className="flex flex-col items-center justify-center border border-slate-300 rounded-md px-3 py-1">
              <h4 className="text-sm font-semibold">S25 Ultra 1TB</h4>
              <span
                className="relative  text-sm
                 text-red-500 font-semibold"
              >
                32.500.000 đ
              </span>
            </button>
            <button className="flex flex-col items-center justify-center border border-slate-300 rounded-md px-3 py-1">
              <h4 className="text-sm font-semibold">S25 Ultra 1TB</h4>
              <span
                className="relative  text-sm
                 text-red-500 font-semibold"
              >
                32.500.000 đ
              </span>
            </button>
          </div>
          <div className="w-full mt-3 border border-slate-300 rounded">
            <div className="w-full h-8 pl-2 bg-[#FEE2E2] text-[14px] text-red-700 font-bold flex items-center gap-2 ">
              <i className="fa-solid fa-gift"></i>
              <p>QUÀ TẶNG / KHUYẾN MÃI</p>
            </div>
            <div className="w-full pt-3"></div>
          </div>
          <div className="w-full mt-3 flex items-center gap-3">
            <button className="w-[85%] h-16 rounded-md bg-red-600 text-[18px] text-[#FFFFFF] font-semibold">
              <p>MUA NGAY</p>
              <p className="text-[12px]">(Giao tận nơi, lắp đặt miễn phí)</p>
            </button>
            <button className="w-[15%] h-16 rounded-md border-2 border-red-600 text-red-600">
              <i className="text-2xl fa-solid fa-cart-plus"></i>
              <p className="text-[10px]">Thêm vào giỏ</p>
            </button>
          </div>
        </div>
      </div>
      {/* Features and comments  */}
      <div className="w-full mt-8 flex">
        <div className="w-[70%] ">
          <div className="w-full flex border-b border-b-slate-300">
            <button className="inline-block px-3 py-[6px] bg-[#F5F5F5] border border-slate-300 text-center text-sm ">
              Đặc điểm nổi bật
            </button>
            <button className="inline-block px-3 py-[6px] bg-[#F5F5F5] border border-slate-300 text-center text-sm ">
              Đánh giá
            </button>
            <button className="inline-block px-3 py-[6px] bg-[#F5F5F5] border border-slate-300 text-center text-sm ">
              Sản phẩm tương tự
            </button>
          </div>

          <Feature/>

          <Comment/>
        </div>
      </div>
    </div>
  );
};

export default Product;
