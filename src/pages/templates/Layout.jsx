import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "components/common/Navbar";
import Sidebar from "components/common/Sidebar";

import routes from "routes";
class Layout extends Component {
  state = {
    isOpen: false
  };

  toggleDrawer = isOpen => {
    this.setState({
      isOpen
    });
  };

  render() {
    const { toggleDrawer } = this;
    const { isOpen } = this.state;
    return (
      <div>
        <Navbar handleDrawer={toggleDrawer} />
        <Sidebar isOpen={isOpen} handleDrawer={toggleDrawer} />
        <Switch>
          {routes.map(route => (
            <Route
              key={route.url}
              path={route.url}
              component={route.component}
            />
          ))}
        </Switch>
      </div>
    );
  }
}

export default Layout;
