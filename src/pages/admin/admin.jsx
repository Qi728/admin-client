import React, { Component } from 'react'
import { Layout } from 'antd';
import { Redirect, Route,Switch } from 'react-router-dom';



import LeftNav from '../../components/left-nav'
import Header from '../../components/header'
import Home from '../home'
import Category from '../category/category'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'

// import Test from './test'





const { Footer, Sider, Content } = Layout;

export default class admin extends Component {
  render() {
    return (
      <Layout style={{height:'100%'}}>
        <Sider>
          <LeftNav/>
        </Sider>
        <Layout>
          <Header>Header</Header>
          {/* <Test/> */}
          <Content style={{backgroundColor:'skyblue'}}>
            <Switch>
              
              <Route path='/home' component={Home}/>
              <Route path='/category' component={Category}/>
              <Route path='/product' component={Product}/>
              <Route path='/role' component={Role}/>
              <Route path='/user' component={User}/>
              <Route path='/charts/bar' component={Bar}/>
              <Route path='/charts/line' component={Line}/>
              <Route path='/charts/pie' component={Pie}/>
              <Redirect exact from='/' to='/home'/>
              {/* <Route component={NotFound}/> 上面没有一个匹配, 直接显示 */}
            </Switch>
          </Content>
          <Footer style={{textAlign:'center' , color:'#ccc'}}>使用Edge浏览器可以获得更佳的用户体验</Footer>
        </Layout>
      </Layout>
    )
  }
}
