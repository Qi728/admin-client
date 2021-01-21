import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.scss";
import logo from "../../assets/images/logo.png";

export default class login extends Component {
  render() {
    return (
      <div className="login">
        <header className="login-header">
          {/* <img src={logo} alt='尚硅谷'/> */}
          {/* <h1>React项目：后台管理系统</h1> */}
        </header>
        <section className="login-content">
          <h2>用户登录</h2>
            <Form name="normal_login" className="login-form" initialValues={{ remember: true }}>
              <Form.Item>
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
              </Form.Item>
              <Form.Item>
                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
              </Form.Item>
            </Form>
        </section>
      </div>
    );
  }
}
