import React, { useEffect, useMemo, useState } from "react";
import "./shoppingCart.scss";
import { IGood } from "../../../interfaces";
import { Checkbox, ErrorBlock } from "antd-mobile";
import BusItem from "../../../components/busItem";

export interface IBusGood extends IGood {
  num: number;
  check: boolean;
}

export default function ShoppingCart() {
  const [busGoods, setBusGoods] = useState<IBusGood[]>([]);

  function getBusGoods() {
    const goods = JSON.parse(localStorage.getItem("goods") || "[]");
    setBusGoods(goods);
  }

  function changeCheck(_id: string, status: boolean) {
    const index = busGoods.findIndex((item) => item._id === _id);
    const newBusGoods: IBusGood[] = JSON.parse(JSON.stringify(busGoods));
    if (index >= 0) {
      newBusGoods[index].check = status;
      setBusGoods(newBusGoods);
    }
  }

  function changeCount(_id: string, count: number) {
    const index = busGoods.findIndex((item) => item._id === _id);
    const newBusGoods: IBusGood[] = JSON.parse(JSON.stringify(busGoods));
    if (index >= 0) {
      newBusGoods[index].num = count;
      if (count === 0) {
        newBusGoods[index].check = false;
      }
      setBusGoods(newBusGoods);
    }
  }

  const totalPrice = useMemo(() => {
    const checkGoods = busGoods.filter((item) => item.check);
    return checkGoods
      .reduce((accumulator, item) => accumulator + item.price * item.num, 0)
      .toFixed(2);
  }, [busGoods]);

  useEffect(() => {
    getBusGoods();
  }, []);

  return (
    <div className="shopping-cart">
      <div className="shopping-content">
        {!busGoods.length ? (
          <ErrorBlock status="empty" />
        ) : (
          busGoods.map((item) => (
            <BusItem
              check={item.check}
              item={item}
              changeCheck={changeCheck}
              changeCount={changeCount}
            />
          ))
        )}
      </div>
      <div className="shopping-footer">
        <Checkbox
          defaultChecked
          onChange={(e) => {
            const newBusGoods: IBusGood[] = JSON.parse(
              JSON.stringify(busGoods)
            );
            newBusGoods.forEach((item) => {
              item.check = e;
              if (item.check && item.num === 0) {
                item.num = 1;
              }
            });
            setBusGoods(newBusGoods);
          }}
        >
          全选
        </Checkbox>
        <div className="footer-right">
          <div className="total-price">
            合计：<div className="price">¥ {totalPrice}</div>
          </div>
          <div className="footer-btn">去结算</div>
        </div>
      </div>
    </div>
  );
}
