import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import { Menu, Button } from 'antd';

import {
  AppstoreOutlined,
  PieChartOutlined,
  MailOutlined,
  TeamOutlined
} from '@ant-design/icons';


import menuList from '../../config/menuConfig'
import logo from '../../assets/images/logo.png'
import './index.scss'

const { SubMenu } = Menu;

// 左侧导航组件
export default class LeftNav extends Component {
  state = {
    collapsed: false,
  };


  
  render() {
    return (
      <div to='/' className='left-nav'>
        <Link className='left-nav-header'>
          <img src={logo} alt=""/>
          <h1>谷粒后台</h1>
        </Link>

        <Menu
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="/home" icon={<PieChartOutlined />}>
            <Link to='/home'>
              <span>首页</span>
            </Link>
          </Menu.Item>

          <SubMenu key="sub1" icon={<MailOutlined />} title="商品">
            <Menu.Item key="/category" icon={<AppstoreOutlined />} >
              <Link to='/category'>
                <span>品类管理</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/product" icon={<AppstoreOutlined />} >
              <Link to='/product'>
                <span>商品管理</span>
              </Link>
            </Menu.Item>  
          </SubMenu>

        </Menu>
      </div>
    )
  }
}
