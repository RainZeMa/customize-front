import { createContext } from "react";

interface ITabBarContext {
  activeTabBarKey: string;
  setActiveTabBarKey: (activeTabBarKey: string) => void;
}

const tabBarContext = createContext<ITabBarContext>({
  activeTabBarKey: "/",
  setActiveTabBarKey: () => {},
});

const TabBarProvider = tabBarContext.Provider;

export { tabBarContext, TabBarProvider };
