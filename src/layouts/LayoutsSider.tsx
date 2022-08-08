import { Layout, Menu } from "antd";
import "./basiclayouts.scss";
import Menus from "./menu.json";
import type { MenuProps } from "antd";
import { NavLink as Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const menuData: MenuProps["items"] = Menus.map((val) => {
  return { key: val.value, label: val.name };
});

const defaultSelectedKeys: string[] = [menuData[0]?.key] as [string];

const { Sider } = Layout;
interface propsType {
  collapsed: boolean;
}

const LayoutsSider = (props: propsType) => {
  const collapsed = props.collapsed;
  const navigate = useNavigate()
  const MenuClick: MenuProps["onClick"] = (e) => {
    console.log(e);
    navigate(e.key);
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        onClick={MenuClick}
        defaultSelectedKeys={defaultSelectedKeys}
        items={menuData}
      />
    </Sider>
  );
};

export default LayoutsSider;
