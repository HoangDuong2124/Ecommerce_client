import React from 'react'
import {Link} from 'react-router-dom'
import "../../App.css"
const ProductCategory = (props) => {
  return (
    <div className="w-full mt-4">
        <div className="w-full h-[50px] border-b-[2px] border-b-red-600">
          <div className=" inline-block h-full px-3 py-2 rounded-t-lg bg-red-600  text-lg text-[#FFFFFF] font-bold text-center">
            {props.title}
          </div>
          </div>
          <div className=" w-full mt-2 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-1">
            <Link to="/product"><div className="group relative w-full  px-[10px] flex flex-col border border-slate-700 ">
              <div className="absolute top-[3%] left-[75%] w-12 h-12 z-10 rounded-full bg-red-500 flex justify-center items-center text-[#FFFFFF] font-bold ">
                -6%
              </div>
              <div className="w-full h-[60%] p-4 flex justify-center">
                <img className="w-full h-full z-0 object-cover group-hover:scale-110 transition-all duration-500" src="/mtinh.jpg" />
              </div>
              <div className="price w-full h-[30px] text-2xl text-red-700 font-bold mt-1">
                <span>25.000.000</span>
                <span className="text-base ml-[1px]">đ</span>
              </div>
              <div className="name_product mt-1 w-full h-12 text-[16.5px] line-clamp-2 ">
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
  )
}

export default ProductCategory