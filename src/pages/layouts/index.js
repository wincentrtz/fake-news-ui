import React, { Component } from 'react'
import Navbar from './navbar';
import Sidebar from './sidebar';

class Layout extends Component  {
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
    return (
      <div>
          <Navbar handleDrawer={this.toggleDrawer}/>
          <Sidebar isOpen={isOpen} handleDrawer={this.toggleDrawer}/>
      </div>
    );
  }
}
  
    
  
export default Layout;
  