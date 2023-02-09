/** @format */

import React from 'react';
import Inf from '../../../../assets/inf.jpg';
export default function ContentNew() {
  return (
    <>
      <div className="my-4 h-[680px] hidden md:block">
        <div className="content-news relative">
          <div className="content-color bg-[#6246fa] w-full lg:w-[80%] px-5 py-20 pr-80">
            <h2 className="text-xl text-white ">
              Thị trường BĐS có thể sẽ bật tăng thời gian tới?
            </h2>
            <p className="content-des text-sm lg:text-lg mt-8 text-gray-200 leading-7">
              Tại “Diễn đàn Bất động sản 2022: Những vùng đất tiềm năng” do Tạp
              chí điện tử TheLEADER tổ chức, diễn giả cho rằng dù thị trường bất
              động sản đang phải đối mặt với nhiều thách thức nhưng cũng là giai
              đoạn thanh lọc mạnh, tạo tiền đề cho sự khởi sắc thời gian tới.
              Trên thực tế, khi tín dụng bị kiểm soát, thành phố lớn khan hiếm
              quỹ đất và nguồn cung bất động sản nhỏ giọt, thì các nhà đầu tư
              đang hướng về dòng vốn trung – dài hạn ở những thị trường giàu
              tiềm năng, đó là các thị trường vùng ven. Sản phẩm được lựa chọn ở
              các khu vực này sẽ có các đặc điểm như: khả năng khai thác, sinh
              lợi nhuận kép, được bảo chứng chất lượng bởi các đơn vị vận hành
              nước ngoài, chủ đầu tư uy tín.
            </p>
            <div className="btn-detail px-5 py-2 rounded shadow-md bg-white text-[#6246fa] inline-block m-4 cursor-pointer">
              Chi tiết
            </div>
          </div>
          <div className="absolute hidden sm:block top-32 lg:top-11 right-0 lg:right-11">
            <img
              src={Inf}
              alt=""
              className="w-[300px] h-[400px] lg:h-[600px] lg:w-[500px] object-fit"
            />
          </div>
        </div>
      </div>
    </>
  );
}
