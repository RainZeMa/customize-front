import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  InfiniteScroll,
  PullToRefresh,
  SearchBar,
  Swiper,
} from "antd-mobile";
import "./home.scss";
import { GoodAPi } from "../../../services";
import { ISwiperItem } from "../../../interfaces";
import HomeSortImage from "../../../components/homeSortImage";
import Waterfall from "../../../components/waterfall";
import useGoodList from "../../../hooks/usegoodList";
import pluginSlot from "../../../services/plugin";

export default function Home() {
  const [swipers, setSwipers] = useState<ISwiperItem[]>([]);
  const { goods, getGoods, loadMore, hasMore } = useGoodList();
  // Plugin start 瀑布流上面区域
  const waterfallTopArea = useRef<HTMLDivElement>(null);
  // Plugin end
  function getSwipers() {
    GoodAPi.getSwipers()
      .then((res) => {
        setSwipers(res.data.items);
      })
      .catch((err) => console.log("error", err));
  }

  useEffect(() => {
    getSwipers();
  }, []);

  // useEffect(() => {
  //   if (waterfallTopArea.current) {
  //     pluginSlot.onDom("home.waterfall.top", waterfallTopArea);
  //   }
  // }, []);

  return (
    <div className="home">
      <PullToRefresh onRefresh={getGoods}>
        <div className="search">
          <SearchBar
            placeholder="请输入内容"
            style={{
              "--border-radius": "100px",
              "--background": "#ffffff",
              "--height": "32px",
              "--padding-left": "12px",
            }}
          />
        </div>
        {/* Plugin start 轮播图显示或隐藏 */}
        {pluginSlot.onValue("home.swiper.visible", true) && (
          <Swiper autoplay loop>
            {swipers.map((item) => (
              <Swiper.Item key={item._id}>
                <Image width="100%" height={160} fit="cover" src={item.pic} />
              </Swiper.Item>
            ))}
          </Swiper>
        )}
        {/* Plugin end */}
        <HomeSortImage />
        {/* Plugin start 瀑布流商品展示模块上边区域 */}
        {pluginSlot.onDom("home.waterfall.top", waterfallTopArea.current)}
        <div ref={waterfallTopArea}></div>
        {/* Plugin end */}
        {/* Plugin start 首页瀑布流数据过滤 */}
        <Waterfall items={pluginSlot.onFilter("home.waterfall.data", goods)} />
        {/* Plugin end */}
        <InfiniteScroll hasMore={hasMore} loadMore={loadMore} />
      </PullToRefresh>
    </div>
  );
}
