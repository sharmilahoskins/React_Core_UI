import React, {Component} from 'react';
import {
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  NavbarBrand,
} from 'reactstrap';

class Header extends Component {

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  render() {
    return (
      <header className="app-header navbar">
        <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>

        <NavbarBrand href="#"></NavbarBrand>


        <Nav className="d-md-down-none" navbar>
          <NavbarToggler className="d-md-down-none mr-auto" onClick={this.sidebarToggle}>
            <span className="navbar-toggler-icon"></span>
          </NavbarToggler>
          <NavItem className="px-3">
            <NavLink href="#">Dashboard</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#">Manage</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#">Settings</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#">Support Center</NavLink>
          </NavItem>
        </Nav>

        <NavbarToggler className="d-md-down-none hamburger-right" onClick={this.asideToggle}>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>


      </header>
    );
  }
}

export default Header;
