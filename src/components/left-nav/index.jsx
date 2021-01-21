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
class LeftNav extends Component {
  state = {
    collapsed: false,
  };


  getMenuNodes = (menuList) => {
    return menuList.map(item => {
      if(!item.children){
        return (
          <Menu.Item key={item.key} icon={<PieChartOutlined />}>
            <Link to={item.key}>
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        )
      }else{
        return (
          <SubMenu key={item.key} icon={<MailOutlined />} title={item.title}  >
            {this.getMenuNodes(item.children)} 
          </SubMenu> 
        )
      }
    })
  }

  componentWillMount () {
    this.menuNodes = this.getMenuNodes(menuList)
  }
  
  render() {

    const path = this.props.location.pathname
    return (
      <div to='/' className='left-nav'>
        <Link className='left-nav-header'>
          <img src={logo} alt=""/>
          <h1>谷粒后台</h1>
        </Link>

        <Menu mode="inline" theme="dark"  inlineCollapsed={this.state.collapsed} selectedKeys={[path]} >

        {
          this.getMenuNodes(menuList)
        }
        </Menu>
      </div>
    )
  }
}


// 包装非路由组件, 返回一个新的组件
// 新的组件向非路由组件传递3个属性: history/location/match
export default withRouter(LeftNav)



// ?? 
// 自动打开当前子列表

