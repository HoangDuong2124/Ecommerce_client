import React from "react";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <div className="w-full">
      <h2 className="my-5 text-[27px] text-[#0A0A0A] font-bold">
        Giỏ hàng của bạn
      </h2>
      <div className="w-full flex rounded-lg  shadow-[0_1px_2px_0_rgba(60,64,67,0.1),0_2px_6px_2px_rgba(60,64,67,0.15)]">
        <div className="w-[60%] py-3">
          <div className="w-full px-3  border-r border-r-slate-300">
            <table className="w-full">
              <thead className="text-sm text-[#232323] text-left">
                <tr className="w-full border-b-2 border-b-slate-300">
                  <th className="w-[55%] ">SẢN PHẨM</th>
                  <th className="w-[15%] ">GIÁ</th>
                  <th className="w-[15%] ">SỐ LƯỢNG</th>
                  <th className="w-[15%] ">TẠM TÍNH</th>
                </tr>
              </thead>
              <tbody>
                <tr className="w-full border-b border-b-slate-300">
                  <td className="w-full flex items-center ">
                    <i className="text-slate-400 cursor-pointer fa-solid fa-trash-can"></i>
                    <div className="w-24 h-full mx-2">
                      <img className="w-[75px] h-[75px]" src="/mtinh.jpg" />
                    </div>
                    <Link className="w-full hover:underline" to="">
                      Samsung Galaxy S24 Ultra 12GB 256GB-Xám
                    </Link>
                  </td>
                  <td className="text-sm font-semibold">32.500.000₫</td>
                  <td className="flex items-center">
                    <button className="w-[25px] h-[25px] rounded-md bg-[#F3F3F3] text-center text-base font-bold">
                      -
                    </button>
                    <span className="px-2 py-[2px]">1</span>
                    <button className="w-[25px] h-[25px] rounded-md bg-[#F3F3F3] text-center text-base font-bold">
                      +
                    </button>
                  </td>
                  <td className="text-sm font-semibold">32.500.000₫</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-[40%] px-3 py-2">
          <div className="w-full">
            <h3 className="mb-[6px] text-base font-semibold border-b-2 border-b-slate-300">
              CỘNG GIỎ HÀNG
            </h3>
            <div className=" flex justify-between py-[2px]  border-b border-b-slate-300">
              <p className="text-sm text-[#232323]">Tạm tính</p>
              <p className="text-sm font-semibold">114.200.000₫</p>
            </div>
            <div className=" flex justify-between py-[2px]  border-b-2 border-b-slate-300">
              <p className="text-sm text-[#232323]">Tổng</p>
              <p className="text-sm font-semibold">114.200.000₫</p>
            </div>
            <Link to="/cart/payment">
              <button className="w-full h-[40px] mt-5 rounded-lg bg-[#FFB400] hover:bg-[#ff9900] text-center text-base text-[#FFFFFF] font-bold">
                Tiến hành thanh toán
              </button>
            </Link>
          </div>
          <div className="w-full mt-3">
            <div className="w-full h-[40px] border-b-2 border-b-slate-300 flex items-center gap-2">
              <i className="rotate-90 opacity-35 fa-solid fa-tag"></i>
              <p className="text-[15px] font-semibold">Phiếu ưu đãi</p>
            </div>
            <input
              className="w-full h-[30px] mt-4 px-2 py-[2px] border outline-none font-semibold"
              type="text"
              placeholder="Mã ưu đãi"
            />
            <button className="w-full h-[35px] mt-5 bg-[#F9F9F9] hover:bg-[#bfacac] border text-center text-[#666] text-base ">
              Áp dụng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
