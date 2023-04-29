import React from "react";
import Masonry from "react-responsive-masonry";
import "./waterfall.scss";
import { IGood } from "../../interfaces";
import { Ellipsis } from "antd-mobile";

interface IProps {
  items: IGood[];
}

export default function Waterfall({ items }: IProps) {
  return (
    <Masonry columnsCount={2} gutter="10px">
      {items.map((item) => (
        <div key={item._id} className="waterfall-item">
          <img
            className="waterfall-image"
            src={item.pic}
            alt=""
            // style={{ width: "100%", display: "block" }}
          />
          <div className="item-title">
            <Ellipsis direction="end" rows={2} content={item.title} />
          </div>
          <div className="item-introduce">
            <div className="item-price">¥ {item.price}</div>
            <div className="item-label">
              <Ellipsis
                direction="end"
                rows={1}
                content={item.label + "已购买"}
              />
            </div>
          </div>
        </div>
      ))}
    </Masonry>
  );
}
