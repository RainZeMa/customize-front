import React from "react";
import { IGood } from "../../interfaces";
import "./sortGoodItem.scss";
import { Ellipsis, Image } from "antd-mobile";

interface IProps {
  items: IGood[];
}

export default function SortGoodList({ items }: IProps) {
  return (
    <div className="sort-good-list">
      {items.map((item) => (
        <div className="item">
          <Image
            src={item.pic}
            width={90}
            height={90}
            fit="cover"
            style={{ borderRadius: "10px" }}
          />
          <div className="item-message">
            <div className="item-title">
              <Ellipsis direction="end" rows={2} content={item.title} />
            </div>
            <div className="item-introduce">
              <div className="item-price">¥ {item.price}</div>
              <div className="item-label">
                <Ellipsis
                  direction="end"
                  rows={1}
                  content={item.label + "人已购买"}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
