import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import TimelineNavbar from "components/common/TimelineNavbar";
import Sidebar from "components/common/Sidebar";

import routes from "routes";

class TimelineLayout extends Component {
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
        <TimelineNavbar handleDrawer={toggleDrawer} />
        <Sidebar isOpen={isOpen} handleDrawer={toggleDrawer} />
        <Switch>
          {routes.map(route => (
            <Route
              key={route.url}
              exact
              path={route.url}
              component={route.component}
            />
          ))}
        </Switch>
      </div>
    );
  }
}

export default TimelineLayout;
