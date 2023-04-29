import React, { useEffect, useState } from "react";
import { InfiniteScroll, PullToRefresh, SearchBar, SideBar } from "antd-mobile";

import useGoodList from "../../../hooks/usegoodList";
import "./classify.scss";
import { useNavigate, useSearchParams } from "react-router-dom";
import SortGoodList from "../../../components/sortGoodList";

const sortTabs = [
  {
    title: "棉衣",
    type: "coat",
  },
  {
    title: "羽绒服",
    type: "downJacket",
  },
  {
    title: "夹克",
    type: "jacket",
  },
  {
    title: "皮衣",
    type: "leather",
  },
  {
    title: "polo衫",
    type: "polo",
  },
  {
    title: "衬衫",
    type: "shirt",
  },
  {
    title: "毛衣",
    type: "sweather",
  },
  {
    title: "卫衣",
    type: "sweatshirt",
  },
  {
    title: "T恤",
    type: "t-shirt",
  },
  {
    title: "风衣",
    type: "windbreak",
  },
];

export default function Classify() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const [activeKey, setActiveKey] = useState<string>(type || "coat");
  const { goods, getGoods, loadMore, hasMore } = useGoodList(type || "coat");

  useEffect(() => {
    setActiveKey(type || "coat");
  }, [type]);

  return (
    <div className="classify">
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
      <div className="sort-area">
        <div className="left-side-bar">
          <SideBar
            style={{ "--width": "70px" }}
            activeKey={activeKey}
            onChange={(type) => {
              console.log(type);
              navigate(`/classify?type=${type}`);
            }}
          >
            {sortTabs.map((item) => (
              <SideBar.Item key={item.type} title={item.title} />
            ))}
          </SideBar>
        </div>
        <div className="left-side-content">
          <PullToRefresh onRefresh={getGoods}>
            <SortGoodList items={goods} />
            <InfiniteScroll hasMore={hasMore} loadMore={loadMore} />
          </PullToRefresh>
        </div>
      </div>
    </div>
  );
}
