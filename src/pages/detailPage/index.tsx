import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./detailPage.scss";
import { Ellipsis, Image, NavBar, Toast } from "antd-mobile";
import { MoreOutline } from "antd-mobile-icons";
import { GoodAPi } from "../../services";
import { IGood } from "../../interfaces";
import { ReactComponent as HomeIcon } from "../../assets/home-icon.svg";
import { ReactComponent as ShopbusIcon } from "../../assets/shopbus-icon.svg";

export default function DetailPage() {
  const { _id } = useParams();
  const navigate = useNavigate();
  const [good, setGood] = useState<IGood>();

  const right = (
    <div style={{ fontSize: 24 }}>
      <MoreOutline />
    </div>
  );

  async function getGoodInfo() {
    if (_id) {
      GoodAPi.getGoodInfo(_id)
        .then((res) => {
          console.log(res);
          setGood(res.data.item);
        })
        .catch((err) => {
          console.log("error", err);
        });
    }
  }

  function storageGood() {
    const goods = JSON.parse(localStorage.getItem("goods") || "[]");
    const newGoods = [...goods, { ...good, num: 1, check: true }];
    localStorage.setItem("goods", JSON.stringify(newGoods));
  }

  useEffect(() => {
    getGoodInfo();
  }, [_id]);

  return (
    <div className="detail-page">
      <NavBar
        right={right}
        onBack={() => {
          navigate(-1);
        }}
        style={{ borderBottom: "1px solid #eee" }}
      >
        标题
      </NavBar>
      <div className="detail-content">
        <Image className="detail-pic" width={"100%"} src={good?.pic} />
        <div className="detail-info">
          <div className="detail-title">
            <Ellipsis direction="end" rows={2} content={good?.title || ""} />
          </div>
          <div className="detail-introduce">
            <div className="detail-price">¥ {good?.price}</div>
            <div className="detail-label">
              <Ellipsis
                direction="end"
                rows={1}
                content={good?.label + "已购买"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="detail-footer">
        <div
          className="footer-item"
          onClick={() => {
            navigate("/");
          }}
        >
          <HomeIcon style={{ width: "30px", height: "30px" }} />
          首页
        </div>
        <div
          className="footer-item"
          onClick={() => {
            navigate("/shopping-cart");
          }}
        >
          <ShopbusIcon style={{ width: "30px", height: "30px" }} />
          购物车
        </div>
        <div className="footer-button">
          <div
            className="bus"
            onClick={() => {
              storageGood();
            }}
          >
            加入购物车
          </div>
          <div className="buy">立即购买</div>
        </div>
      </div>
    </div>
  );
}
