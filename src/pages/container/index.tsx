import React, { useState, useContext } from "react";
import "./container.scss";
import { Outlet, useNavigate } from "react-router-dom";
import { NavBar, TabBar } from "antd-mobile";
import {
  AppstoreOutline,
  AppOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";
import { TabBarProvider, tabBarContext } from "../../stores/tabBarContext";

const tabs = [
  {
    key: "/",
    title: "首页",
    icon: <AppOutline />,
  },
  {
    key: "/classify",
    title: "分类",
    icon: <AppstoreOutline />,
    badge: "5",
  },
  {
    key: "/shopping-cart",
    title: "购物车",
    icon: <UnorderedListOutline />,
  },
  {
    key: "/my",
    title: "我的",
    icon: <UserOutline />,
  },
];

export default function MobileContainer() {
  const navigate = useNavigate();
  const [activeTabBarKey, setActiveTabBarKey] = useState<string>("/");
  return (
    <div className="container">
      <NavBar
        back={null}
        style={{
          "--border-bottom": "1px #eee solid",
        }}
      >
        <h3>{tabs.find((item) => item.key === activeTabBarKey)?.title}</h3>
      </NavBar>
      <div className="main">
        <TabBarProvider
          value={{
            activeTabBarKey,
            setActiveTabBarKey,
          }}
        >
          <Outlet />
        </TabBarProvider>
      </div>
      <TabBar
        activeKey={activeTabBarKey}
        onChange={(key: string) => {
          setActiveTabBarKey(key);
          navigate(key);
        }}
      >
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
}
