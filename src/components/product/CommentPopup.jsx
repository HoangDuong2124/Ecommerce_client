import React from "react";

import "../../App.css"
const CommentPopup = (props) => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 z-50 py-8 bg-[#000000CC] flex justify-center items-center ">
      <div className="relative lg:w-[600px] lg:h-full sm:w-[70%] sm:h-[80%] overflow-y-auto custom-scrollbar  bg-[#FFFFFF] rounded-xl">
        <div className="sticky top-0 left-0 w-full h-[60px] p-4 bg-[#F4F6F8] flex justify-between items-center rounded-t-xl">
          <h3 className="text-[20px] text-[#363636] font-bold">
            Đánh giá & nhận xét
          </h3>
          <button
            onClick={props.setPopup}
            className="text-[20px] text-[#363636] font-bold"
          >
            X
          </button>
        </div>
        <div className="w-full flex">
          <img className="w-[100px] h-[100px]" src="/cps-ant.webp" />
          <p className="mt-6 text-[20px] text-[#4A4A4A] font-bold">
            Tai nghe Bluetooth Apple AirPods 4
          </p>
        </div>
        <h3 className="text-left ml-4 mt-5 text-base text-[#111111] font-bold">
          Đánh giá chung
        </h3>
        <div className="w-full p-4 grid grid-cols-5">
          <div>
            <i className="text-2xl text-yellow-500 fa-solid fa-star"></i>
            <p className="text-xs text-[#4A4A4A]">Rất tệ</p>
          </div>
          <div>
            <i className="text-2xl text-yellow-500 fa-solid fa-star"></i>
            <p className="text-xs text-[#4A4A4A]">Tệ</p>
          </div>
          <div>
            <i className="text-2xl text-yellow-500 fa-solid fa-star"></i>
            <p className="text-xs text-[#4A4A4A]">Bình thường</p>
          </div>
          <div>
            <i className="text-2xl text-yellow-500 fa-solid fa-star"></i>
            <p className="text-xs text-[#4A4A4A]">Tốt</p>
          </div>
          <div>
            <i className="text-2xl text-yellow-500 fa-solid fa-star"></i>
            <p className="text-xs text-[#4A4A4A]">Tuyệt vời</p>
          </div>
        </div>
        <div className="w-full p-4">
          <textarea
            className="w-full h-[128px] inline-block p-[11px] border outline-none rounded-lg text-sm"
            placeholder="Xin mời chia sẻ một số cảm nhận về sản phẩm (Tối thiểu 15 ký tự)"
          />
        </div>
        <div className="w-full px-4 pb-4 text-left">
          <button className="w-[115px] h-[80px] flex flex-col gap-[6px] items-center justify-center rounded-md border border-dotted border-slate-300 text-[#637381]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8C3 8.55 3.45 9 4 9C4.55 9 5 8.55 5 8V6H7C7.55 6 8 5.55 8 5C8 4.45 7.55 4 7 4H5V2C5 1.45 4.55 1 4 1C3.45 1 3 1.45 3 2V4H1C0.45 4 0 4.45 0 5C0 5.55 0.45 6 1 6H3V8Z"
                fill="#637381"
              ></path>{" "}
              <circle cx="13" cy="14" r="3" fill="#637381"></circle>{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.83 6H21C22.1 6 23 6.9 23 8V20C23 21.1 22.1 22 21 22H5C3.9 22 3 21.1 3 20V9.72C3.3 9.89 3.63 10 4 10C5.1 10 6 9.1 6 8V7H7C8.1 7 9 6.1 9 5C9 4.63 8.89 4.3 8.72 4H15.12C15.68 4 16.22 4.24 16.59 4.65L17.83 6ZM8 14C8 16.76 10.24 19 13 19C15.76 19 18 16.76 18 14C18 11.24 15.76 9 13 9C10.24 9 8 11.24 8 14Z"
                fill="#637381"
              ></path>
            </svg>
            <p className="text-[13px] font-bold">Thêm hình ảnh</p>
          </button>
        </div>

        <div className="sticky left-0 bottom-0 w-full h-[60px] px-[10px] py-[10px] bg-[#FFFFFF] shadow-[0_-4px_20px_-1px_#287CEA26]">
          <button className="w-full h-full rounded-lg text-base text-[#FFFFFF] bg-[#D7000E]  font-bold">
            GỬI ĐÁNH GIÁ
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentPopup;
