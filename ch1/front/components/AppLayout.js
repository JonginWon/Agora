import React, { useState } from "react";
import PropType from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import { TwitterOutlined, UserOutlined, FormOutlined } from "@ant-design/icons";
import UserProfile from "../components/UserProfile";
import LoginForm from "../components/LoginForm";

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item icon={<TwitterOutlined />}>
          <Link href="/">노드버드</Link>
        </Menu.Item>
        <Menu.Item icon={<UserOutlined />}>
          <Link href="/profile">프로필</Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search />
        </Menu.Item>
        <Menu.Item icon={<FormOutlined />}>
          <Link href="/signup">회원가입</Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? (
            <UserProfile setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
          <div>Hello</div>
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://github.com/JonginWon"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made by Jongin
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.prototype = {
  children: PropType.node.isRequired,
};

export default AppLayout;
