import { useState } from "react";
import Header from "../../components/layout/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Tên không được để trống";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Số điện thoại không được để trống";
    if (!formData.email.trim()) {
      newErrors.email = "Email không được để trống";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Trả về true nếu không có lỗi
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await axios.post("http://localhost:8080/api/auth/signup", formData);
        alert("Đăng ký thành công!");
        navigate("/signin");
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };
  return (
    <div>
      <Header />
      <div className="w-full mt-7 text-center">
        <h1 className="text-2xl font-bold">Đăng ký với</h1>
        <div className="my-6 flex items-center justify-center gap-7">
          <div className="flex items-center gap-2 cursor-pointer">
            <img className="w-6 h-6" src="/google.png" />
            <p className="text-lg text-[#4A4A4A]">Google</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              className="w-7 h-7"
              src="https://img.icons8.com/?size=100&id=0m71tmRjlxEe&format=png&color=000000"
            />
            <p className="text-lg text-[#4A4A4A]">Zalo</p>
          </div>
        </div>
        <div className="w-[400px] mx-auto flex items-center">
          <div className="w-full h-[2px] bg-slate-300"></div>
          <div className="mx-2 text-xl text-[#454545]">hoặc</div>
          <div className="w-full h-[2px] bg-slate-300"></div>
        </div>
        <div className="w-[50%] mx-auto">
          <form onSubmit={handleSubmit}>
          <input
            className="w-full py-1 my-3 outline-none border-b border-b-slate-300"
            type="text"
            placeholder="Nhập họ và tên"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <p className="text-left text-red-800 text-xs font-semibold">{errors.name}</p>
          <input
            className="w-full py-1 my-3 outline-none border-b border-b-slate-300"
            type="text"
            placeholder="Nhập số điện thoại"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <p className="text-left text-red-800 text-xs font-semibold">{errors.phone}</p>
          <input
            className="w-full py-1 my-3 outline-none border-b border-b-slate-300"
            type="email"
            placeholder="Nhập email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <p className="text-left text-red-800 text-xs font-semibold">{errors.email}</p>
          <input
            className="w-full py-1 my-3 outline-none border-b border-b-slate-300"
            type="password"
            placeholder="Nhập mật khẩu"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <p className="text-left text-red-800 text-xs font-semibold">{errors.password}</p>
          <button type="submit" className="w-full h-9 mt-5 bg-[#E0052B] rounded-lg text-[#FFFFFF] text-lg font-bold ">
            Đăng ký
          </button>
          </form>
          <div className="w-full mt-4 flex items-center justify-center gap-1 text-sm">
            <p className="text-[#777777]">Bạn đã có tài khoản?</p>
            <Link className="text-[#D70018] font-semibold" to="/signin">
              Đăng nhập ngay
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
