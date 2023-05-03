import React from "react";
import "./my.scss";
import { Avatar } from "antd-mobile";

export default function My() {
  return (
    <div className="my">
      <div className="user">
        <Avatar
          src=""
          style={{ "--size": "48px", "--border-radius": "24px" }}
        />
        <h2 style={{ marginLeft: "10px" }}>点击登录</h2>
      </div>
    </div>
  );
}
