import React, { Component } from "react";
import Auxilary from "../hoc/Auxilary";
import Navbar from "../components/Navigation/navbarsection/navbar";
import Footer from "../components/footersection/footer";
class Layout extends Component {
  render() {
    return (
      <Auxilary>
        <Navbar />
        <main>{this.props.children}</main>
        <Footer
          copyright={"© Copyright 2020 Shubham Thanekar"}
          secid="footer"
        />
      </Auxilary>
    );
  }
}

export default Layout;
