import React from "react";
import PropType from "prop-types";
import Link from "next/link";
import { Menu } from "antd";
import { TwitterOutlined, UserOutlined, FormOutlined } from "@ant-design/icons";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item icon={<TwitterOutlined />}>
          <Link href="/">노드버드</Link>
        </Menu.Item>
        <Menu.Item icon={<UserOutlined />}>
          <Link href="/profile">프로필</Link>
        </Menu.Item>
        <Menu.Item icon={<FormOutlined />}>
          <Link href="/signup">회원가입</Link>
        </Menu.Item>
      </Menu>
      {children}
    </div>
  );
};

AppLayout.prototype = {
  children: PropType.node.isRequired,
};

export default AppLayout;
