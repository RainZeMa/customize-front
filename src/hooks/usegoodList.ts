import { useMemo, useState, useEffect } from "react";
import { IGood } from "../interfaces";
import { GoodAPi } from "../services";
import { Toast } from "antd-mobile";

const useGoodList = (type?: string) => {
  console.log("type", type);
  const [pageSize] = useState<number>(20);
  // const [current, setCurrent] = useState<number>(1);
  const [goods, setGoods] = useState<IGood[]>([]);
  const [remain, setRemain] = useState<number>(0);
  const hasMore = useMemo(() => {
    return remain > 0;
  }, [remain]);

  async function getGoods() {
    try {
      const { data, code, message } = await GoodAPi.getGoods({
        current: 1,
        pageSize,
        type,
      });
      if (code === 0) {
        setGoods(data.items);
        setRemain(data.total - pageSize);
        // setCurrent(current + 1);
      } else {
        Toast.show({
          icon: "fail",
          content: message,
        });
      }
    } catch (error) {
      console.error(error);
      Toast.show({
        icon: "fail",
        content: "网络错误",
      });
    }
  }

  async function loadMore() {
    try {
      console.log("AAA");
      const { data, code, message } = await GoodAPi.getGoods({
        // current,
        pageSize,
        type,
        prevId: goods[goods.length - 1]._id,
      });
      if (code === 0) {
        setGoods([...goods, ...data.items]);
        // setCurrent(current + 1);
        setRemain(remain - pageSize);
      } else {
        Toast.show({
          icon: "fail",
          content: message,
        });
      }
    } catch (error) {
      console.error(error);
      Toast.show({
        icon: "fail",
        content: "网络错误",
      });
    }
  }

  useEffect(() => {
    getGoods();
  }, [type]);

  return {
    goods,
    hasMore,
    getGoods,
    loadMore,
  };
};

export default useGoodList;
