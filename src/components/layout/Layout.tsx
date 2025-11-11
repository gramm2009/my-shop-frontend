import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, theme } from "antd";
import Router from "../../router/Router";
import LeftMainMenu from "../leftMainMenu/LeftMainMenu";


const { Header, Content, Footer, Sider } = Layout;

const MainAppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          className=""
          style={{
            color: "red",
            height: 64,
            background: "yellow",
            userSelect: "none",
            cursor: "pointer"
          }}
          onClick={()=>window.location.href = "/"}
        >
          LOGO
        </div>
        <LeftMainMenu/>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb
            style={{ margin: "16px 0" }}
            items={[{ title: "User" }, { title: "Bill" }]}
          />
          <div
            style={{
              padding: 24,
              minHeight: "100%",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Router />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default MainAppLayout;
