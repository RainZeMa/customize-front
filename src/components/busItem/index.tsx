import React from "react";
import { Checkbox, Ellipsis, Image, Stepper } from "antd-mobile";
import "./busItem.scss";
import { IBusGood } from "../../pages/container/shoppingCart";

interface IProps {
  check: boolean;
  item: IBusGood;
  changeCheck: (_id: string, status: boolean) => void;
  changeCount: (_id: string, count: number) => void;
}

export default function BusItem({
  check,
  item,
  changeCheck,
  changeCount,
}: IProps) {
  console.log("AAA", check);
  return (
    <div className="bus-item">
      <Checkbox
        checked={check}
        onChange={(e) => {
          changeCheck(item._id, e);
        }}
      ></Checkbox>
      <Image
        className="pic"
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
            <Stepper
              min={0}
              value={item.num}
              onChange={(value) => {
                changeCount(item._id, value);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
