import React, {Component} from 'react'
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

import About from '../views/about'
import Home from '../views/home'
import MyNavLink from "./my-nav-link";

export default class App extends Component {

  render () {

    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/* 自定义属性 activeClassName 被选中时的状态 */}
                <MyNavLink className="list-group-item" to='/about' >About</MyNavLink>
                <MyNavLink className="list-group-item" to='/home'  >Home</MyNavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  <Switch>
                    <Route path='/about' component={About} />
                    <Route path='/home' component={Home} />
                    {/* 默认重定向到 /about */}
                    <Redirect to='/about' />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}