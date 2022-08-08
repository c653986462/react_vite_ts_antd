import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import React, { useState } from "react";
import "./basiclayouts.scss";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import routerConfig from "@/router/index";
import LayoutsSider from "./LayoutsSider";
import ErrorPage from "./404";

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
};

const Layouts = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <LayoutsSider collapsed={collapsed} />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Routes>
            <Route element={<ErrorPage />} path="*"></Route>
            {routerConfig.routes.map((route) => {
              return (
                <Route
                  key={route.path}
                  element={route.element}
                  path={route.path}
                />
              );
            })}
          </Routes>
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Layouts;
