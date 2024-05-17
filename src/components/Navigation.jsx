import React from "react";
import { Backdrop, Hamburger, Header, Logo, Sidebar } from "./nav";

function Navigation() {
  // Creates the full navigation component
  return (
    <div>
      <Sidebar />
      <Hamburger />
      <Backdrop />
      <Header />
      <Logo />
    </div>
  );
}

export default Navigation;
