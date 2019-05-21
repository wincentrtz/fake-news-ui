import React, { Component } from 'react'

import Navbar from './navbar';
import Sidebar from './sidebar';

class Layout extends Component {
  state = {
    isOpen: false
  };

  toggleDrawer = (isOpen) => {
    this.setState({
      isOpen,
    });
  };

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;
    return (
      <div>
        <Navbar handleDrawer={this.toggleDrawer} />
        <Sidebar isOpen={isOpen} handleDrawer={this.toggleDrawer} />
        {children}
      </div>
    );
  }
}



export default Layout;
