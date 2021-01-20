// 应用根组件
import React, { Component } from 'react'
import { Button,message } from 'antd';
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Login from './pages/login/login.jsx'
import Admin from './pages/admin/admin.jsx'


export default class App extends Component {

  
  success = () => {
    message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
  };
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/login' component={Login} ></Route>
            <Route path='/' component={Admin} ></Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
