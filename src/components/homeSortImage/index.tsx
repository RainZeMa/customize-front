import React, { useContext } from "react";
import "./homeSortImage.scss";

import CoatIcon from "../../assets/clothes/coat-icon.png";
import DownJacketIcon from "../../assets/clothes/downJacket-icon.png";
import JacketIcon from "../../assets/clothes/jacket-icon.png";
import LeatherIcon from "../../assets/clothes/leather-icon.png";
import PoloIcon from "../../assets/clothes/polo-icon.png";
import ShirtIcon from "../../assets/clothes/shirt-icon.png";
import SweatherIcon from "../../assets/clothes/sweather-icon.png";
import SweatshirtIcon from "../../assets/clothes/sweatshirt-icon.png";
import TShirtIcon from "../../assets/clothes/t-shirt-icon.png";
import WindbreakIcon from "../../assets/clothes/windbreak-icon.png";
import { Grid, Image } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import { tabBarContext } from "../../stores/tabBarContext";
import pluginSlot from "../../services/plugin";

const clothesTypes = [
  {
    title: "棉衣",
    icon: CoatIcon,
    type: "coat",
  },
  {
    title: "羽绒服",
    icon: DownJacketIcon,
    type: "downJacket",
  },
  {
    title: "夹克",
    icon: JacketIcon,
    type: "jacket",
  },
  {
    title: "皮衣",
    icon: LeatherIcon,
    type: "leather",
  },
  {
    title: "polo衫",
    icon: PoloIcon,
    type: "polo",
  },
  {
    title: "衬衫",
    icon: ShirtIcon,
    type: "shirt",
  },
  {
    title: "毛衣",
    icon: SweatherIcon,
    type: "sweather",
  },
  {
    title: "卫衣",
    icon: SweatshirtIcon,
    type: "sweatshirt",
  },
  {
    title: "T恤",
    icon: TShirtIcon,
    type: "t-shirt",
  },
  {
    title: "风衣",
    icon: WindbreakIcon,
    type: "windbreak",
  },
];

export default function HomeSortImage() {
  const navigate = useNavigate();
  const { setActiveTabBarKey } = useContext(tabBarContext);

  return (
    <div className="home-sort-list">
      <Grid columns={5} gap={8}>
        {clothesTypes.map((item) => (
          <Grid.Item
            key={item.type}
            className="sort-list-item"
            onClick={() => {
              pluginSlot.onSyncEvent("home.sortImage.click", () => {
                navigate(`/classify?type=${item.type}`);
                setActiveTabBarKey("/classify");
              });
            }}
          >
            <Image src={item.icon} width={50} height={50} />
            <div>{item.title}</div>
          </Grid.Item>
        ))}
      </Grid>
    </div>
  );
}
