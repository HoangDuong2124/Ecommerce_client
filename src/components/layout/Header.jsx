import  { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../../App.css";
import { AuthContext } from "../../context/AuthContext";
const Header = () => {
  const navigate = useNavigate();
  const { user,logout } = useContext(AuthContext);
  const handleLogout = ()=>{
    logout()
    navigate("/signin")
  }
  return (
    <div className="w-full h-auto">
      <div className="w-full h-8 bg-[#232323] px-10 flex justify-between items-center">
        <div className="w-auto flex gap-5 text-[#FFFFFF] text-xs font-normal">
          <a className="w-auto flex items-center gap-1" href="">
            <i className="fa-solid fa-dollar-sign"></i>
            <p>Cam kết giá tốt nhất</p>
          </a>
          <a className="w-auto flex items-center gap-1" href="">
            <i className="fa-solid fa-truck"></i>
            <p>Miễn phí vận chuyển</p>
          </a>
          <a className="w-auto flex items-center gap-1" href="">
            <i className="fa-regular fa-handshake"></i>
            <p>Thanh toán khi nhận hàng</p>
          </a>
          <a className="w-auto flex items-center gap-1" href="">
            <i className="fa-solid fa-clock-rotate-left"></i>
            <p>Bảo hành tận nơi</p>
          </a>
        </div>
        <div className="flex  text-[#FFFFFFCC] text-[12.8px]">
          {user ? (
            <div className="group relative w-auto h-full">
              {user.name}
              <div className=" absolute hidden group-hover:block top-4 left-0  h-auto py-3  rounded-lg z-20">
                <ul className="w-[200px] bg-[#FFFFFF] border border-slate-300 ">
                  <li className="w-full h-[35px] pl-5 flex items-center gap-2 border-b-[1px] border-b-slate-300 text-sm text-[#000000] font-medium hover:bg-slate-200">
                    <div className="w-[15px] text-center">
                      <i className="fa-solid fa-gear"></i>
                    </div>
                    <p>Cài đặt</p>
                  </li>
                  <li className="w-full h-[35px]  pl-5 flex items-center gap-2 border-b-[1px] border-b-slate-300 text-sm text-[#000000] font-medium hover:bg-slate-200">
                    <div className="w-[15px] text-center">
                      <i className="fa-solid fa-user"></i>
                    </div>
                    <p>Thông tin người dùng</p>
                  </li>
                  <li className="w-full h-[35px] mt-3 text-sm text-[#000000] font-medium hover:bg-slate-200">
                    <button onClick={handleLogout} className="w-full h-full flex items-center justify-center gap-2">
                      <div className="w-[15px] text-center">
                        <i className="fa-solid fa-right-from-bracket"></i>
                      </div>
                      <p>Đăng xuất</p>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link className=" border-r-[1px] " to="/signin">
              <p className="mr-3"> Đăng nhập</p>
            </Link>
          )}
          <Link className="w-auto flex gap-[1px] items-center" to="/cart">
            <p className="ml-3">Giỏ hàng </p>
            <i className="mt-1 fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
      </div>
      <div className="w-full h-[90px] px-8 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-[24px] text-red-600 font-bold">
            HOÀNG MINH LAPTOP
          </h1>
        </Link>
        <input
          className=" max-w-[500px] w-full  h-[43px]  bg-[#00000008] px-3 rounded-full outline-none"
          type="text"
          placeholder="Nhập sản phẩm cần tìm... "
        ></input>
        <div className="relative w-[170px] h-[62px] px-[25px] py-[5px] rounded-lg border border-slate-300 ">
          <p className="text-sm text-[#000000]">Mua hàng online</p>
          <p className="text-[20px] text-[#E80104] font-bold italic">
            0918888888
          </p>

          <div className="absolute w-10 h-10 left-[-20px] top-[11px] bg-white flex justify-center items-center rounded-full border border-slate-300 text-[#E80104] text-[20px] ">
            <i className="fa-solid fa-phone-volume"></i>
          </div>
        </div>
      </div>

      <div className="w-full h-[46px] px-[50px] bg-[#E10000] flex items-center gap-12 ">
        <div className="category_menu relative w-[200px] h-full flex items-center gap-2 pl-3 text-[15px] text-[#FFFFFF] font-bold shadow-md shadow-slate-600 cursor-pointer ">
          <i className="mt-[1px] fa-solid fa-bars"></i>
          <h2>Danh mục sản phẩm</h2>

          <ul className="category_drop absolute top-[46px] left-0 w-[200px] h-auto  bg-[#FFFFFF] border border-slate-300">
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
        </div>

        <div className="flex gap-2 items-center cursor-pointer">
          <i className="text-[18px] text-yellow-500 fa-solid fa-phone-volume"></i>
          <h2 className="text-sm text-[#FFFFFF] font-bold">
            Bán hàng trực tuyến
          </h2>
        </div>
        <div className="flex gap-2 items-center cursor-pointer">
          <i className="text-[18px] text-yellow-500 fa-solid fa-sack-dollar"></i>
          <h2 className="text-sm text-[#FFFFFF] font-bold">Mua trả góp</h2>
        </div>
        <div className="flex gap-2 items-center cursor-pointer">
          <svg
            fill="#FFFF00"
            height="20px"
            width="20px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <path
                  d="M512,34.88c0.039-9.349-3.569-18.126-10.159-24.716S486.457-0.028,477.126,0.006c-9.322,0.039-18.098,3.702-24.711,10.314
			c-2.8,2.8-7.893,8.848-10.679,12.205c-2.926,3.525-2.442,8.755,1.083,11.68c3.524,2.926,8.754,2.442,11.68-1.083
			c4.364-5.256,7.971-9.395,9.646-11.071c3.498-3.497,8.132-5.435,13.05-5.456c0.027,0,0.052,0,0.079,0
			c4.862,0,9.419,1.88,12.837,5.299c3.437,3.437,5.32,8.024,5.299,12.916c-0.021,4.917-1.959,9.551-5.456,13.05
			c-3.131,3.131-13.893,11.668-29.312,22.439c-9.121-15.594-26.037-26.099-45.37-26.099H293.808
			c-16.396,0-31.81,6.385-43.405,17.978L7.613,304.971C2.704,309.88,0,316.407,0,323.349c0,6.942,2.704,13.47,7.613,18.378
			l162.667,162.667c5.068,5.067,11.722,7.6,18.378,7.6c6.656,0,13.312-2.534,18.378-7.6l242.792-242.791
			c11.593-11.594,17.978-27.008,17.978-43.405V96.735c0-3.585-0.363-7.085-1.051-10.47c17.551-12.077,30.435-22.18,34.929-26.674
			C508.298,52.979,511.961,44.203,512,34.88z M451.217,218.198c0,11.965-4.66,23.214-13.119,31.673L195.306,492.664
			c-3.664,3.665-9.63,3.665-13.295,0L19.344,329.997c-1.775-1.775-2.754-4.136-2.754-6.648s0.978-4.872,2.754-6.647L262.135,73.911
			c8.461-8.46,19.709-13.119,31.673-13.119h121.463c13.64,0,25.53,7.637,31.618,18.859c-9.798,6.488-20.769,13.387-32.408,20.171
			c-0.363-0.398-0.734-0.792-1.119-1.177c-13.584-13.584-35.686-13.584-49.27,0c-13.584,13.584-13.584,35.686,0,49.27
			c6.792,6.792,15.714,10.187,24.635,10.187c8.921,0,17.843-3.395,24.635-10.187c9.067-9.067,12.072-21.926,9.036-33.517
			c10.123-5.893,19.844-11.916,28.815-17.743c0.001,0.028,0.003,0.054,0.003,0.081V218.198z M381.319,127.007
			c1.457,2.897,4.381,4.569,7.417,4.569c1.253,0,2.526-0.285,3.722-0.887c4.862-2.446,9.707-4.99,14.504-7.596
			c0.048,4.735-1.722,9.485-5.328,13.091c-7.116,7.115-18.692,7.115-25.808,0c-7.115-7.116-7.115-18.692,0-25.808
			c3.558-3.558,8.231-5.336,12.904-5.336c3.7,0,7.389,1.134,10.536,3.363c-4.695,2.552-9.46,5.051-14.263,7.468
			C380.908,117.928,379.259,122.915,381.319,127.007z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M247.162,168.962c-4.581,0-8.295,3.713-8.295,8.295v175.179c0,4.581,3.714,8.295,8.295,8.295s8.295-3.714,8.295-8.295
			V177.257C255.457,172.675,251.743,168.962,247.162,168.962z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M209.231,240.213c-13.583-13.586-35.686-13.585-49.268-0.001c-13.584,13.584-13.584,35.686,0,49.27
			c6.793,6.793,15.713,10.188,24.635,10.187c8.92,0,17.843-3.397,24.634-10.187c6.581-6.581,10.205-15.329,10.205-24.635
			S215.812,246.792,209.231,240.213z M197.501,277.75c-7.116,7.116-18.692,7.115-25.807,0c-7.115-7.116-7.115-18.692,0-25.808
			c3.558-3.558,8.231-5.336,12.904-5.336s9.346,1.778,12.904,5.336c3.447,3.447,5.345,8.029,5.345,12.904
			C202.846,269.721,200.948,274.303,197.501,277.75z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M334.36,240.212c-13.584-13.585-35.687-13.584-49.268,0c-13.584,13.584-13.584,35.686,0,49.27
			c6.792,6.792,15.713,10.187,24.635,10.187c8.921,0,17.843-3.395,24.634-10.187C347.944,275.898,347.944,253.796,334.36,240.212z
			 M322.629,277.75c-7.116,7.116-18.692,7.115-25.807,0c-7.115-7.116-7.115-18.692,0-25.808c3.558-3.558,8.231-5.336,12.904-5.336
			s9.346,1.778,12.904,5.336C329.745,259.058,329.745,270.634,322.629,277.75z"
                />
              </g>
            </g>
          </svg>
          <h2 className="text-sm text-[#FFFFFF] font-bold">Khuyến mãi</h2>
        </div>
        <div className="flex gap-2 items-center cursor-pointer">
          <i className="text-[18px] text-yellow-500 fa-regular fa-newspaper"></i>
          <h2 className="text-sm text-[#FFFFFF] font-bold">Tin tức</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
