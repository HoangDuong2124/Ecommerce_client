import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[300px] px-12 flex justify-between items-center  mt-3 bg-red-500 text-white">
      <div className="flex flex-col gap-3 ">
        <h3 className="text-lg font-medium">Apple Center Dương Iphone Đà Nẵng</h3>
        <div>
          <i className="fa-solid fa-house-chimney"></i>
          <span>Cơ sở 1: 196 Hoàng Diệu- Đà Nẵng</span>
        </div>
        <div>
          <i className="fa-solid fa-house-chimney"></i>
          <span>Cơ sở 1: 196 Hoàng Diệu- Đà Nẵng</span>
        </div>
        <div>
          <i className="fa-solid fa-phone"></i>
          <span>Hotline: 02366508633 - 0966887444 Mr. Dương</span>
        </div>
        <div>
          <i className="fa-solid fa-envelope"></i>
          <span>Email: duongiphone@gmail.com</span>
        </div>
        <div>
        <i className="fa-brands fa-facebook-f"></i>
        <span>Facebook: fb.com/abcdefgh</span>
        </div>
      </div>
      <div className="flex flex-col gap-3 ">
         <h3 className="text-lg font-medium">Thông tin và chính sách</h3>
         <p>Chính sách đổi trả hàng</p>
         <p>Chính sách bảo hành</p>
         <p>Chính sách đại lí</p>
         <p>Hướng dẫn mua hàng</p>
         <p>Thông tin hoá đơn mua hàng</p>
      </div>
      <div className="flex flex-col gap-3 ">
         <h3 className="text-lg font-medium">Dịch vụ và thông tin khác</h3>
         <p>khách hàng doanh nghiệp</p>
         <p>ưu đãi thanh toán</p>
         <p>Liên hệ hợp tác kinh doanh</p>
         <p>Tuyển dụng</p>
         <p>Dịch vụ bảo hành mở rộng</p>
      </div>
    </div>
  );
};

export default Footer;
