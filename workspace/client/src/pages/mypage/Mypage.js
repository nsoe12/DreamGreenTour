import React from "react";
import { Outlet } from "react-router-dom";

const Mypage = () => {
  return (
    <div>
      마이페이지
      <Outlet />
    </div>
  );
};

export default Mypage;
