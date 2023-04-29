import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routers";
import type { IUserInfo } from "./interfaces";
import { SafeArea } from "antd-mobile";
import { UserProvider } from "./stores/userContext";

function App() {
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    nickname: "",
    account: "",
    avatar: "",
    introduce: "",
  });
  // const projectBRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   if (projectBRef.current && window.ProjectPlugin) {
  //     window.ProjectPlugin.init(projectBRef.current);
  //   }
  // }, []);

  return (
    <div className="App">
      <SafeArea position="top" />
      <UserProvider
        value={{
          userInfo,
          setUserInfo,
        }}
      >
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </UserProvider>
      <SafeArea position="bottom" />
      {/* <div ref={projectBRef} />
      <h1>{window.ProjectPlugin.one("AAA")}</h1>
      <h1>{window.ProjectPlugin.three}</h1> */}
    </div>
  );
}

export default App;
