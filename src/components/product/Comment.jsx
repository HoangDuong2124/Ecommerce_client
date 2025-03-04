import React from "react";
import CommentPopup from "./CommentPopup";
import { useState } from "react";

const Comment = () => {
    const [popup,setPopup]  = useState(false)
  return (
    <div className="w-full h-auto px-3 py-4 mt-5 rounded-lg  shadow-[0_1px_2px_0_rgba(60,64,67,0.1),0_2px_6px_2px_rgba(60,64,67,0.15)] text-justify">
      <h3 className="w-full text-base text-[#363636] font-bold">
        Đánh giá & nhận xét Tai nghe Bluetooth Apple AirPods 4
      </h3>
      <div className="w-full pb-4 mt-4 flex border-b border-b-slate-300">
        <div className="w-[40%] border-r border-r-slate-300 flex flex-col justify-center items-center gap-1">
          <p className="text-2xl text-[#363636] font-bold">5.0/5</p>
          <div className="flex items-center gap-[5px]">
            <i className="text-yellow-500 fa-solid fa-star"></i>
            <i className="text-yellow-500 fa-solid fa-star"></i>
            <i className="text-yellow-500 fa-solid fa-star"></i>
            <i className="text-yellow-500 fa-solid fa-star"></i>
            <i className="text-yellow-500 fa-solid fa-star"></i>
          </div>
          <a className="text-base text-[#0C53B7] underline" href="">
            15 đánh giá
          </a>
        </div>
        <div className="w-[60%] flex flex-col justify-center items-center gap-1">
          <div className=" flex items-center gap-2">
            <div>
              <span className="text-sm text-[#4A4A4A]">5</span>
              <i className="text-sm text-yellow-500 fa-solid fa-star"></i>
            </div>
            <progress
              className="max-w-[70%] h-2 rounded-md"
              max="15"
              value="14"
            ></progress>
            <div className="text-[13px] text-[#4A4A4A]">14 đánh giá</div>
          </div>
          <div className=" flex items-center gap-2">
            <div>
              <span className="text-sm text-[#4A4A4A]">5</span>
              <i className="text-sm text-yellow-500 fa-solid fa-star"></i>
            </div>
            <progress
              className="max-w-[70%] h-2 rounded-md"
              max="15"
              value="14"
            ></progress>
            <div className="text-[13px] text-[#4A4A4A]">14 đánh giá</div>
          </div>
          <div className=" flex items-center gap-2">
            <div>
              <span className="text-sm text-[#4A4A4A]">5</span>
              <i className="text-sm text-yellow-500 fa-solid fa-star"></i>
            </div>
            <progress
              className="max-w-[70%] h-2 rounded-md"
              max="15"
              value="14"
            ></progress>
            <div className="text-[13px] text-[#4A4A4A]">14 đánh giá</div>
          </div>
          <div className=" flex items-center gap-2">
            <div>
              <span className="text-sm text-[#4A4A4A]">5</span>
              <i className="text-sm text-yellow-500 fa-solid fa-star"></i>
            </div>
            <progress
              className="max-w-[70%] h-2 rounded-md"
              max="15"
              value="14"
            ></progress>
            <div className="text-[13px] text-[#4A4A4A]">14 đánh giá</div>
          </div>
          <div className=" flex items-center gap-2">
            <div>
              <span className="text-sm text-[#4A4A4A]">5</span>
              <i className="text-sm text-yellow-500 fa-solid fa-star"></i>
            </div>
            <progress
              className="max-w-[70%] h-2 rounded-md"
              max="15"
              value="14"
            ></progress>
            <div className="text-[13px] text-[#4A4A4A]">14 đánh giá</div>
          </div>
        </div>
      </div>
      <div className="w-full pt-4 pb-7 text-center text-base border-b border-b-slate-300">
        <p className=" text-[#4A4A4A]">Bạn đánh giá sao về sản phẩm này?</p>
        <button onClick={()=>setPopup(true)} className="mt-3 px-7 py-2 rounded bg-[#D7000E] text-[#FFFFFF] font-medium">
          Đánh giá ngay
        </button>
       {popup&&<CommentPopup setPopup={()=>setPopup(false)}/>} 
      </div>
      <div className="w-full px-4 py-6 flex border-b border-b-slate-300">
        <div className="w-[40px]">
          <img
            className="w-8 h-8 object-cover rounded-full"
            src="/avatar.jpg"
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <p className="text-[15px] text-[#4A4A4A] font-semibold">
              Hoàng Minh Dương
            </p>
            <p className="text-xs text-[#707070]">17/02/2025 17:42</p>
          </div>
          <div className="flex items-center gap-[2px]">
            <i className="text-[13px] text-yellow-500 fa-solid fa-star"></i>
            <i className="text-[13px] text-yellow-500 fa-solid fa-star"></i>
            <i className="text-[13px] text-yellow-500 fa-solid fa-star"></i>
            <i className="text-[13px] text-yellow-500 fa-solid fa-star"></i>
            <i className="text-[13px] text-yellow-500 fa-solid fa-star"></i>
          </div>
          <div className="text-xs text-[#4A4A4A]">
             Sản phẩm đẹp dùng ok
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
